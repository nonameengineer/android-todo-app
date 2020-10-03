//
//  Task.swift
//  todo-app
//
//  Created by Ruslan Usmanov on 03.10.2020.
//

import SwiftUI

struct Task: Hashable, Codable, Identifiable{
    var id: Int;
    var title: String;
    var color: String;
    var date: Date;
    var isFavorite: Bool;
    var isArchived: Bool;
}
