//
//  DeleteCats.swift
//  ManfreddsAirport
//
//  Created by Dunc on 4/12/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

class DeleteCats : Network {
    init(success successCallback: @escaping StringCallback, failure failureCallback: @escaping VoidCallback) {
        let url = URL(string: Domain.Tuskss + "/api/cats")!
        var request = URLRequest(url: url)
        
        let json: [String: Any] = ["albert": "Albie"]
        
        guard let jsonData = try? JSONSerialization.data(withJSONObject: json) else {
            super.init()
            return
        }
        
        request.httpMethod = HTTPMethod.DELETE
        request.setValue("application/json; charset=utf-8", forHTTPHeaderField:"Content-Type")
        request.httpBody = jsonData
        
        super.init(request: request, callback: { (data, response, error) in
            guard error == nil, let responseString = String(data: data!, encoding: String.Encoding.utf8) else {
                failureCallback()
                return
            }
            
            successCallback(responseString)
        })
    }
}
