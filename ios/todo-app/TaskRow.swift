//
//  TaskRow.swift
//  todo-app
//
//  Created by Ruslan Usmanov on 03.10.2020.
//

import SwiftUI

struct TaskRow: View {
    var body: some View {
        HStack {
            Text("asfasfasf")
            Spacer()
        }
    }
}

struct TaskRow_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            TaskRow()
            TaskRow()
        }
        .previewLayout(.fixed(width: 300, height: 70))
    }
}
