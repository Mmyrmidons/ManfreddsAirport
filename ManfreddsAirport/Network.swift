//
//  Network.swift
//  ManfreddsAirport
//
//  Created by Dunc on 1/30/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

enum Domain {
    static let NodeJS = "https://nodejs.org/en/"
    static let W3 = "https://www.w3.org/"
    static let GitHub = "https://github.com/"
    static let WFMU = "https://wfmu.org/"
}

enum HTTPMethod {
    static let GET = "GET"
    static let POST = "POST"
    static let PUT = "PUT"
    static let DELETE = "DELETE"
}

typealias NetworkCallback = (String) -> ()
typealias ResponseCallback = (Data?, URLResponse?) -> ()
typealias ResponseErrorCallback = (Error?) -> ()

typealias URLSessionCallback = (Data?, URLResponse?, Error?) -> ()
typealias VoidCallback = () -> ()

class Network {
    init?() {}
    
    init(request: URLRequest, responseCompletionHandler: @escaping ResponseCallback, responseErrorHander: @escaping ResponseErrorCallback) {
        let task = URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) in
            if let responseError = error {
                print(responseError.localizedDescription)
                responseErrorHander(responseError)
            } else {
                responseCompletionHandler(data, response)
            }
        })
        
        task.resume()
    }
    
    convenience init(with request: URLRequest, responseCompletionHandler: @escaping ResponseCallback) {
        self.init(request: request, responseCompletionHandler: responseCompletionHandler, responseErrorHander: { errorString in
            print("Miss Tikkie Error: \(errorString)")
        })
    }
    
    func fetch(request: URLRequest, callback: @escaping URLSessionCallback) {
        let task = URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) in
            if let responseError = error {
                print(responseError.localizedDescription)
            }
            
            callback(data, response, error)
        })
        
        task.resume()
    }

    init(request: URLRequest, callback: @escaping URLSessionCallback) {
        let task = URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) in
            if let responseError = error {
                print(responseError.localizedDescription)
            }
            
            callback(data, response, error)
        })
        
        task.resume()
    }
}
