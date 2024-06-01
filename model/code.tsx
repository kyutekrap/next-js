type view = 'flow' | 'step'
interface text {
    'flow': string
    'step': string
}

export class Code {
    _text: text
    _currentView: view

    constructor(flowCode: string, stepCode: string) {
        this._text = {
            'flow': flowCode,
            'step': stepCode
        }
        this._currentView = 'flow'
    }

    get text(): text {
        return this._text
    }
    
    set text(text: string) {
        switch (this._currentView) {
            case 'flow':
                this._text['flow'] = text
                break
            case 'step':
                this._text['step'] = text
                break
        }
    }

    get currentView() {
        return this._currentView
    }

    set currentView(currentView: view) {
        this._currentView = currentView
    }
    
}