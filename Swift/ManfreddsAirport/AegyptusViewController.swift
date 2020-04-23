//
//  AegyptusViewController.swift
//  ManfreddsAirport
//
//  Created by Dunc on 5/11/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import UIKit
import SnapKit

class AegyptusViewController: UIViewController {
    @IBOutlet weak var glyphSelector: UIView!
   
    override func viewDidLoad() {
        super.viewDidLoad()

        glyphSelector.snp.makeConstraints { (make) -> Void in
            make.left.equalTo(self.view).offset(0)
            make.bottom.equalTo(self.view).offset(0)
            make.right.equalTo(self.view).offset(0)
            make.height.equalTo(190)
        }

        _ = PostCats(success: { jsonString in
            print("Miss Piglet: \(jsonString)")
        }, failure: { print("\(CatError.CatVomit)") })
    }
}

 
