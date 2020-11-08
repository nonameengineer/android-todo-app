package com.example.todoapp.newcard

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import com.example.todoapp.R
import dagger.android.support.DaggerFragment

class NewCardFragment : DaggerFragment()  {

    companion object {
        fun newInstance() = NewCardFragment()
    }

    private lateinit var viewModel: NewCardViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        viewModel = ViewModelProvider(this).get(NewCardViewModel::class.java)

        return inflater.inflate(R.layout.new_card_fragment, container, false)
    }
}
