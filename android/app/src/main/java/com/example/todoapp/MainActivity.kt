package com.example.todoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.todoapp.ui.main.MainFragment
import com.example.todoapp.ui.trashcan.TrashcanFragment
import kotlinx.android.synthetic.main.header.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        this.getSupportActionBar()?.hide()
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

        }
    }


}
