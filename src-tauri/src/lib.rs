use tauri::Manager;
use tauri_plugin_store::StoreExt;

use tauri_plugin_prevent_default::Flags;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let store = app.store("settings.json")?;
            let is_fullscreen = store
            .get("settings")
            .and_then(|val| {
                val.get("screenSize")
                    .and_then(|size| size.as_str())
                    .map(|s| s == "fullscreen")
            })
            .unwrap_or(false);

            if let Some(window) = app.get_webview_window("main") {
                window.set_fullscreen(is_fullscreen).unwrap();
                window.show().unwrap();
            }

            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_store::Builder::default().build())
        .plugin(prevent_default())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// 開発: DevToolsとリロード以外は無効化
#[cfg(debug_assertions)]
fn prevent_default() -> tauri::plugin::TauriPlugin<tauri::Wry> {
    tauri_plugin_prevent_default::Builder::new()
        .with_flags(Flags::all().difference(Flags::DEV_TOOLS | Flags::RELOAD))
        .build()
}

// 本番: 全て無効化
#[cfg(not(debug_assertions))]
fn prevent_default() -> tauri::plugin::TauriPlugin<tauri::Wry> {
    tauri_plugin_prevent_default::init()
}