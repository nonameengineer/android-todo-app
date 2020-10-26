package com.example.todoapp.main

import android.content.Context
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.todoapp.R
import com.example.todoapp.trashcan.TrashcanFragment
import kotlinx.android.synthetic.main.header.*


class MainActivity : AppCompatActivity() {
    var darkTheme: Boolean = false;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        this.supportActionBar?.hide()
        val darkTheme = this.getPreferences(Context.MODE_PRIVATE).getBoolean("dark", false);
        if (darkTheme) {
            this.setTheme(R.style.AppDarkTheme)
        } else {
            this.setTheme(R.style.AppTheme)
        }
        setContentView(R.layout.main_activity)
        if (savedInstanceState == null) {
            supportFragmentManager.beginTransaction()
                .replace(R.id.container, MainFragment.newInstance())
                .commitNow()
        }

        logo.setOnClickListener {
            supportFragmentManager.beginTransaction()
                .replace(R.id.container, MainFragment.newInstance())
                .commitNow()
        }

        deleteButton.setOnClickListener {
            supportFragmentManager.beginTransaction()
                .replace(R.id.container, TrashcanFragment.newInstance())
                .commitNow()
        }

        toggleThemeButton.setOnClickListener {
            val sharedPref = this.getPreferences(Context.MODE_PRIVATE)
            if (darkTheme) {
                this.setTheme(R.style.AppTheme)
                with(sharedPref.edit()) {
                    putBoolean("dark", false)
                    apply()
                }
            } else {
                this.setTheme(R.style.AppDarkTheme)
                with(sharedPref.edit()) {
                    putBoolean("dark", true)
                    apply()
                }
            }

            this.recreate()
        }
    }


}
