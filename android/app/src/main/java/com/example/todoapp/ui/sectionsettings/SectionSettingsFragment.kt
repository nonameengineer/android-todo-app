package com.example.todoapp.ui.sectionsettings

import androidx.lifecycle.ViewModelProviders
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.todoapp.R

class SectionSettingsFragment : Fragment() {

    companion object {
        fun newInstance() = SectionSettingsFragment()
    }

    private lateinit var viewModel: SectionSettingsViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.section_settings_fragment, container, false)
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProviders.of(this).get(SectionSettingsViewModel::class.java)
        // TODO: Use the ViewModel
    }

}
