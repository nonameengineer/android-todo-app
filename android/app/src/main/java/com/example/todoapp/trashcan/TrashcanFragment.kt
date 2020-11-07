package com.example.todoapp.trashcan

import androidx.lifecycle.ViewModelProvider
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.todoapp.R

class TrashcanFragment : Fragment() {

    companion object {
        fun newInstance() = TrashcanFragment()
    }

    private lateinit var viewModel: TrashcanViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        viewModel = ViewModelProvider(this).get(TrashcanViewModel::class.java)

        return inflater.inflate(R.layout.trashcan_fragment, container, false)
    }
}
