const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelixjqML9ve = await XenoFelix.new({from: accounts[0]});
		const addressX4MsgJH = accounts[1]
		const addressgbPe3Z3 = accounts[0]
		const uintbdrLciG = BigInt("1724")
		const addressDusBpx = accounts[3]
		const uintQnonS4x = BigInt("1364")
		const addressxun9uZz = accounts[3]
		const boolKq9ZPjh = await XenoFelixjqML9ve.paused.call({from: accounts[3]});
		const addressy1JaLqj = await XenoFelixjqML9ve.notFrozenAndTransaction.call(addressgbPe3Z3, addressX4MsgJH, {from: accounts[0]});
		const addressIbrA3pP = await XenoFelixjqML9ve.burnFrom.call(addressDusBpx, uintbdrLciG, {from: accounts[0]});
		const stringddrUcO = await XenoFelixjqML9ve.name.call({from: accounts[4]});
		const bool9gdgPl = await XenoFelixjqML9ve.transfer.call(addressxun9uZz, uintQnonS4x, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringyRRopx1 = "PM3mrAkVHccc6DyJEOmAZafgUcJsKQBJN1ROWXukqRerHd4WViShgXUMchRlsFEbVnbRaadxh6LfWQUP9endBgJku8uv"
		const string1HcWy6 = "WXbw8uDtgXEzKkjclbEYIyfeEBxstd4UMhf9Nhx0atL4NFdOL5sbGAN8wyqyiZ81hprHga"
		const uintiPwqUq9 = BigInt("427")
		const uintIhVLDZz = BigInt("83")
		const XenoFelixcpi5Xzy = await XenoFelix.new(stringyRRopx1, string1HcWy6, uintiPwqUq9, uintIhVLDZz, {from: accounts[3]});
		const uintEYlpxTZ = BigInt("1026")
		const addressl4GM1X7 = accounts[1]
		await XenoFelixcpi5Xzy.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const boollUxjOG = await XenoFelixcpi5Xzy.transfer.call(addressl4GM1X7, uintEYlpxTZ, {from: accounts[3]});
		await XenoFelixcpi5Xzy.unpause.call({from: accounts[5]});
		await XenoFelixcpi5Xzy.whenPaused.call({from: accounts[4]});

		await expect(XenoFelixcpi5Xzy.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringgGvcpN8 = "2tEZ77A8RJR68HSzXMCr"
		const stringAIXdOXq = "EnivxXBIqwwbpRJGIahLW"
		const uintzIKQi7S = BigInt("253")
		const XenoFelixB1w3mGD = await XenoFelix.new(stringgGvcpN8, stringAIXdOXq, uintzIKQi7S, {from: accounts[3]});
		const uintuECHJt = BigInt("883")
		const addressShJhKgt = accounts[5]
		const addressxUqdgHH = accounts[1]
		const uintSQr0Vwb = BigInt("968")
		const uintKVIfUDD = BigInt("1783")
		const addressPMZqYUg = accounts[1]
		const addressRJo3GMF = accounts[4]
		await XenoFelixB1w3mGD.onlyNewOwner.call({from: accounts[3]});
		const boolr2PuwW = await XenoFelixB1w3mGD.transferFrom.call(addressxUqdgHH, addressShJhKgt, uintuECHJt, {from: "0x0000000000000000000000000000000000000001"});
		const boolPtRLPb = await XenoFelixB1w3mGD.transferWithLock.call(addressPMZqYUg, uintKVIfUDD, uintSQr0Vwb, {from: accounts[1]});
		await XenoFelixB1w3mGD.unpause.call({from: accounts[2]});
		const addresst7YiSNE = await XenoFelixB1w3mGD.addPauser.call(addressRJo3GMF, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringp5C5dU = "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5"
		const stringBqqwA8m = "oUhuIydDgBUAbOHsbOI4Zl49ARhWLVtlMOrJxzkSl"
		const uintQEw6zSw = BigInt("1946")
		const uintgfuEaQ = BigInt("241")
		const XenoFelixoQDxMIu = await XenoFelix.new(stringp5C5dU, stringBqqwA8m, uintQEw6zSw, uintgfuEaQ, {from: accounts[4]});
		const uintNaUnLeW = BigInt("201")
		const addressIASAX2i = accounts[0]
		const uinttswysGB = BigInt("1443")
		const addressYALiiVm = accounts[5]
		const boolbgRXP16 = await XenoFelixoQDxMIu.approve.call(addressIASAX2i, uintNaUnLeW, {from: accounts[1]});
		const boolJZ8Gm6W = await XenoFelixoQDxMIu.unlock.call(addressYALiiVm, uinttswysGB, {from: accounts[1]});
		const uint8VBL2upA = await XenoFelixoQDxMIu.decimals.call({from: accounts[1]});

		assert.equal(boolbgRXP16, true)
		await expect(XenoFelixoQDxMIu.unlock.call(addressYALiiVm, uinttswysGB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringn26dhPn = "t5thEGQ0CuyBw7edv4uXL1hZY1PmEPWSqIgY5bpJOf9zMJWgxE1TePeL0N6eTxpQzp0fK6XzVpTyDMYtYoblhnbrnJvx6eD8k6"
		const stringRXZzK5e = "M3dyk7Ac9Cfh6lMbhX8SmVWrjQkvmyguV13mTJS2gWyFqJT33J3HvTxyfOC34KyRo3Li1QnClXwRFM9sFk8bgEwnP6dL"
		const uintVGmldQ8 = BigInt("173")
		const XenoFelixmDx5J1z = await XenoFelix.new(stringn26dhPn, stringRXZzK5e, uintVGmldQ8, {from: accounts[0]});
		const uintkte3ieE = BigInt("1829")
		const addresshgeB91b = accounts[1]
		const addresslf6jQr = accounts[5]
		const addressGNK2XOe = "0x0000000000000000000000000000000000000001"
		const uintWg2Ykq2 = BigInt("1498")
		const addressQYkUumP = accounts[4]
		const boolDDlsa1U = await XenoFelixmDx5J1z.transferFrom.call(addresslf6jQr, addresshgeB91b, uintkte3ieE, {from: accounts[0]});
		const boolo02ZUC = await XenoFelixmDx5J1z.freezeAccount.call(addressGNK2XOe, {from: accounts[0]});
		await XenoFelixmDx5J1z.whenPaused.call({from: accounts[2]});
		await XenoFelixmDx5J1z.whenNotPaused.call({from: accounts[2]});
		const boolQCJt0JN = await XenoFelixmDx5J1z.transfer.call(addressQYkUumP, uintWg2Ykq2, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringp5C5dU = "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5"
		const stringBqqwA8m = "oUhuIydDgBUAbOHsbOI4Zl49ARhWLVtlMOrJxzkSl"
		const uintOrarpCy = BigInt("1946")
		const uintekWKA3M = BigInt("241")
		const XenoFelixoQDxMIu = await XenoFelix.new(stringp5C5dU, stringBqqwA8m, uintOrarpCy, uintekWKA3M, {from: accounts[4]});
		const uintrXmUeGY = BigInt("201")
		const addressN2hN4cp = accounts[0]
		const uintkVkz2FA = BigInt("1133")
		const addressN9NZIhw = accounts[0]
		const uintfW0zifs = BigInt("1443")
		const addressFLGiPtD = accounts[5]
		const boolbgRXP16 = await XenoFelixoQDxMIu.approve.call(addressN2hN4cp, uintrXmUeGY, {from: accounts[1]});
		const booleQBvroE = await XenoFelixoQDxMIu.transfer.call(addressN9NZIhw, uintkVkz2FA, {from: accounts[3]});
		const boolJZ8Gm6W = await XenoFelixoQDxMIu.unlock.call(addressFLGiPtD, uintfW0zifs, {from: accounts[1]});
		await XenoFelixoQDxMIu.whenNotPaused.call({from: accounts[1]});
		const uint8VBL2upA = await XenoFelixoQDxMIu.decimals.call({from: accounts[1]});

		assert.equal(boolbgRXP16, true)
		await expect(XenoFelixoQDxMIu.transfer.call(addressN9NZIhw, uintkVkz2FA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringp5C5dU = "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5"
		const stringBqqwA8m = "oUhuIydDgBUAbOHsbOI4Zl49ARhWLVtlMOrJxzkSl"
		const uintFuIVW8G = BigInt("1946")
		const uintEhXg8fK = BigInt("241")
		const XenoFelixoQDxMIu = await XenoFelix.new(stringp5C5dU, stringBqqwA8m, uintFuIVW8G, uintEhXg8fK, {from: accounts[4]});
		const uintdf13paq = BigInt("201")
		const addresstdFW02 = accounts[0]
		const uintnnJVrka = BigInt("1817")
		const addressXAdwIY8 = "0x0000000000000000000000000000000000000001"
		const boolbgRXP16 = await XenoFelixoQDxMIu.approve.call(addresstdFW02, uintdf13paq, {from: accounts[1]});
		const boolomzKxgq = await XenoFelixoQDxMIu.transfer.call(addressXAdwIY8, uintnnJVrka, {from: accounts[4]});
		const uint8VBL2upA = await XenoFelixoQDxMIu.decimals.call({from: accounts[1]});

		assert.equal(boolbgRXP16, true)
		assert.equal(boolomzKxgq, true)
		assert.equal(uint8VBL2upA, BigInt("241"))
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintNSW5VS0 = BigInt("1890")
		const uintUeJxdFn = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintNSW5VS0, uintUeJxdFn, {from: accounts[2]});
		const uintC2zkZXN = BigInt("94")
		const addressZTdaZAY = accounts[5]
		const uintog5GbnW = BigInt("1570")
		const addressSmyfaop = "0x0000000000000000000000000000000000000001"
		const addressNIJJrWS = accounts[0]
		const boolRlZpkLm = await XenoFelixWA9k3P0.increaseAllowance.call(addressZTdaZAY, uintC2zkZXN, {from: accounts[0]});
		const boolldpZD1a = await XenoFelixWA9k3P0.transferFrom.call(addressNIJJrWS, addressSmyfaop, uintog5GbnW, {from: accounts[1]});
		const boolEjUufT2 = await XenoFelixWA9k3P0.acceptOwnership.call({from: accounts[3]});

		assert.equal(boolRlZpkLm, true)
		await expect(XenoFelixWA9k3P0.transferFrom.call(addressNIJJrWS, addressSmyfaop, uintog5GbnW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringp5C5dU = "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5"
		const stringBqqwA8m = "oUhuIydDgBUAbOHsbOI4Zl49ARhWLVtlMOrJxzkSl"
		const uintPOGfU7H = BigInt("1946")
		const uintgDJfPNQ = BigInt("241")
		const XenoFelixoQDxMIu = await XenoFelix.new(stringp5C5dU, stringBqqwA8m, uintPOGfU7H, uintgDJfPNQ, {from: accounts[4]});
		const uintakPhFMg = BigInt("1443")
		const addressP813ROd = accounts[5]
		await XenoFelixoQDxMIu.onlyPauser.call({from: accounts[1]});
		const boolJZ8Gm6W = await XenoFelixoQDxMIu.unlock.call(addressP813ROd, uintakPhFMg, {from: accounts[1]});
		const uint8VBL2upA = await XenoFelixoQDxMIu.decimals.call({from: accounts[1]});

		await expect(XenoFelixoQDxMIu.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringp5C5dU = "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5"
		const stringBqqwA8m = "oUhuIydDgBUAbOHsbOI4Zl49ARhWLVtlMOrJxzkSl"
		const uintR3hxhDW = BigInt("1946")
		const uintqUfCkbk = BigInt("241")
		const XenoFelixoQDxMIu = await XenoFelix.new(stringp5C5dU, stringBqqwA8m, uintR3hxhDW, uintqUfCkbk, {from: accounts[4]});
		const uintTRj7Frf = BigInt("201")
		const addressJs5aXv5 = accounts[0]
		const uintHrNWdy = BigInt("1133")
		const addressRvjytv = accounts[0]
		const uintVo2pQWl = BigInt("1443")
		const addressJLcTSs2 = accounts[5]
		const boolbgRXP16 = await XenoFelixoQDxMIu.approve.call(addressJs5aXv5, uintTRj7Frf, {from: accounts[1]});
		const boolHr0l3J = await XenoFelixoQDxMIu.paused.call({from: accounts[4]});
		const uint256rj7BHEU = await XenoFelixoQDxMIu.totalSupply.call({from: accounts[1]});
		const booleQBvroE = await XenoFelixoQDxMIu.transfer.call(addressRvjytv, uintHrNWdy, {from: accounts[3]});
		const boolJZ8Gm6W = await XenoFelixoQDxMIu.unlock.call(addressJLcTSs2, uintVo2pQWl, {from: accounts[1]});
		const uint8VBL2upA = await XenoFelixoQDxMIu.decimals.call({from: accounts[1]});

		assert.equal(boolHr0l3J, false)
		assert.equal(boolbgRXP16, true)
		assert.equal(uint256rj7BHEU, BigInt("85494195770496460939876599465948341143860290802017450145588280868147285721088"))
		await expect(XenoFelixoQDxMIu.transfer.call(addressRvjytv, uintHrNWdy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringp5C5dU = "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5"
		const stringBqqwA8m = "oUhuIydDgBUAbOHsbOI4Zl49ARhWLVtlMOrJxzkSl"
		const uintMbn5ztw = BigInt("1946")
		const uintCkyJja = BigInt("241")
		const XenoFelixoQDxMIu = await XenoFelix.new(stringp5C5dU, stringBqqwA8m, uintMbn5ztw, uintCkyJja, {from: accounts[4]});
		const uint205bdp = BigInt("201")
		const addressjySHu7l = accounts[0]
		const uintz6bpn4O = BigInt("1817")
		const addressowvVhjp = "0x0000000000000000000000000000000000000001"
		const uintwS5SfJ = BigInt("2")
		const boolbgRXP16 = await XenoFelixoQDxMIu.approve.call(addressjySHu7l, uint205bdp, {from: accounts[1]});
		const boolomzKxgq = await XenoFelixoQDxMIu.transfer.call(addressowvVhjp, uintz6bpn4O, {from: accounts[4]});
		const uint256l8Tj8ab = await XenoFelixoQDxMIu.burn.call(uintwS5SfJ, {from: accounts[4]});
		const uint8VBL2upA = await XenoFelixoQDxMIu.decimals.call({from: accounts[1]});

		assert.equal(boolbgRXP16, true)
		assert.equal(boolomzKxgq, true)
		assert.equal(uint8VBL2upA, BigInt("241"))
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintEolpQlL = BigInt("1890")
		const uinti9yD3N = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintEolpQlL, uinti9yD3N, {from: accounts[2]});
		const addressOfQBaae = accounts[1]
		const uint256ewfRhUd = await XenoFelixWA9k3P0.balanceOf.call(addressOfQBaae, {from: accounts[2]});
		const boolEjUufT2 = await XenoFelixWA9k3P0.acceptOwnership.call({from: accounts[3]});

		assert.equal(uint256ewfRhUd, BigInt("0"))
		await expect(XenoFelixWA9k3P0.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringyijmiEL = "7tA2PbxTlZHRVB9tDIEr6CJwN0EvI6jhV28nlMlPdzmKz38wrE2Z5jd4Mi1SplFp6z"
		const stringRJSQzr = "fkP2tKEBIpIL2eMoJUsNzHUH4MfiFJVgnXxeXPR7ovU"
		const uint1ROBcw = BigInt("177")
		const XenoFelixApWnBQ = await XenoFelix.new(stringyijmiEL, stringRJSQzr, uint1ROBcw, {from: accounts[2]});
		const uintK51RBsw = BigInt("1074")
		const addresspRhWwf9 = accounts[4]
		const addressnGSOdcR = accounts[4]
		const addressao4tNfv = accounts[1]
		const addressuhSClVK = accounts[3]
		const addressRHNYcQg = accounts[1]
		const boolpCkJY68 = await XenoFelixApWnBQ.transferFrom.call(addressnGSOdcR, addresspRhWwf9, uintK51RBsw, {from: accounts[3]});
		const addressUWh0w8L = await XenoFelixApWnBQ.transferOwnership.call(addressao4tNfv, {from: accounts[4]});
		const uint256jfw29z7 = await XenoFelixApWnBQ.allowance.call(addressRHNYcQg, addressuhSClVK, {from: accounts[3]});
		await XenoFelixApWnBQ.whenPaused.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringp5C5dU = "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5"
		const stringBqqwA8m = "oUhuIydDgBUAbOHsbOI4Zl49ARhWLVtlMOrJxzkSl"
		const uintFYzhcm1 = BigInt("1946")
		const uintruYt6GV = BigInt("241")
		const XenoFelixoQDxMIu = await XenoFelix.new(stringp5C5dU, stringBqqwA8m, uintFYzhcm1, uintruYt6GV, {from: accounts[4]});
		const uintG58JZqC = BigInt("1429")
		const addressYYErxT1 = accounts[5]
		await XenoFelixoQDxMIu.renouncePauser.call({from: accounts[1]});
		const boolJZ8Gm6W = await XenoFelixoQDxMIu.unlock.call(addressYYErxT1, uintG58JZqC, {from: accounts[1]});

		await expect(XenoFelixoQDxMIu.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintqemMZ2 = BigInt("1890")
		const uintDbxCmno = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintqemMZ2, uintDbxCmno, {from: accounts[2]});
		const uintLKX25x2 = BigInt("1474")
		const addressThyMyU = accounts[5]
		const address8L9lXD = accounts[4]
		const stringD9F8zqu = await XenoFelixWA9k3P0.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixWA9k3P0.onlyNewOwner.call({from: accounts[3]});
		const boolVokIL2 = await XenoFelixWA9k3P0.transferFrom.call(address8L9lXD, addressThyMyU, uintLKX25x2, {from: accounts[0]});
		const boolEjUufT2 = await XenoFelixWA9k3P0.acceptOwnership.call({from: accounts[3]});

		assert.equal(stringD9F8zqu, "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe")
		await expect(XenoFelixWA9k3P0.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqRmrI8P = "TVtDBLdemv7VTNrmSMUzjekXtj4RjkcNS0O"
		const stringJUg0sCq = "bsLpoBEa7JEKjMq32nM9etxDzs4VF54Ry85PPdNgygRrTXTfr3Z9nusqx9fFXGdM1gspC"
		const uintI0eZcde = BigInt("69")
		const XenoFelixZD689lm = await XenoFelix.new(stringqRmrI8P, stringJUg0sCq, uintI0eZcde, {from: "0x0000000000000000000000000000000000000001"});
		const uinttUQfiHb = BigInt("562")
		const addressdS1QKfw = accounts[0]
		const addressriFXW34 = accounts[4]
		const uintB8IJzeo = BigInt("1675")
		const addressVg8k6Jj = accounts[1]
		const uint1dnSa4 = BigInt("1725")
		const addressf5fimke = accounts[1]
		const addressrZbrb6 = accounts[3]
		const stringxxM62vX = await XenoFelixZD689lm.symbol.call({from: accounts[4]});
		const boolek31cRp = await XenoFelixZD689lm.transferFrom.call(addressriFXW34, addressdS1QKfw, uinttUQfiHb, {from: accounts[2]});
		const boolecycmD = await XenoFelixZD689lm.transfer.call(addressVg8k6Jj, uintB8IJzeo, {from: accounts[1]});
		const booloERcuIY = await XenoFelixZD689lm.transfer.call(addressf5fimke, uint1dnSa4, {from: accounts[2]});
		const boolhM4F9FI = await XenoFelixZD689lm.unfreezeAccount.call(addressrZbrb6, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringp5C5dU = "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5"
		const stringBqqwA8m = "oUhuIydDgBUAbOHsbOI4Zl49ARhWLVtlMOrJxzkSl"
		const uintuUMtcOW = BigInt("1946")
		const uintBBdCMGS = BigInt("241")
		const XenoFelixoQDxMIu = await XenoFelix.new(stringp5C5dU, stringBqqwA8m, uintuUMtcOW, uintBBdCMGS, {from: accounts[4]});
		const uintsYI4Mhc = BigInt("201")
		const addresspRMojq = accounts[1]
		const addressRhXKPRU = "0x0000000000000000000000000000000000000001"
		const addressJ1lKIiY = accounts[1]
		const uintYxe58JU = BigInt("1817")
		const addressFXCg6G7 = "0x0000000000000000000000000000000000000001"
		const boolbgRXP16 = await XenoFelixoQDxMIu.approve.call(addresspRMojq, uintsYI4Mhc, {from: accounts[1]});
		const stringLsbTpXo = await XenoFelixoQDxMIu.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addressAloTJs4 = await XenoFelixoQDxMIu.notFrozenAndTransaction.call(addressJ1lKIiY, addressRhXKPRU, {from: accounts[3]});
		const boolomzKxgq = await XenoFelixoQDxMIu.transfer.call(addressFXCg6G7, uintYxe58JU, {from: accounts[4]});

		assert.equal(boolbgRXP16, true)
		assert.equal(stringLsbTpXo, "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5")
		await expect(XenoFelixoQDxMIu.notFrozenAndTransaction.call(addressJ1lKIiY, addressRhXKPRU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintzJouyvv = BigInt("1890")
		const uintqZfDIvD = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintzJouyvv, uintqZfDIvD, {from: accounts[2]});
		const addressavTvBub = accounts[2]
		const addressm3NLMo = "0x0000000000000000000000000000000000000001"
		const boolTCiUT95 = await XenoFelixWA9k3P0.unfreezeAccount.call(addressavTvBub, {from: accounts[2]});
		const booll6FQTAY = await XenoFelixWA9k3P0.isOwner.call(addressm3NLMo, {from: accounts[3]});

		await expect(XenoFelixWA9k3P0.unfreezeAccount.call(addressavTvBub, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintQA1VSyo = BigInt("1890")
		const uint5aUHDp = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintQA1VSyo, uint5aUHDp, {from: accounts[2]});
		const uintnSeGjbG = BigInt("548")
		const addressoErglND = accounts[0]
		const uintpqK7oP7 = BigInt("1474")
		const addressySXHSRE = accounts[6]
		const addressQieZTxz = accounts[4]
		const uintmctC15b = BigInt("984")
		const addresszlw53VW = accounts[3]
		const uintfLBiSQ = BigInt("1448")
		const addressnUn1oBR = accounts[3]
		const uintbM2R6dV = BigInt("1178")
		const addressaoXMSo2 = "0x0000000000000000000000000000000000000001"
		const boolvzCJp3z = await XenoFelixWA9k3P0.decreaseAllowance.call(addressoErglND, uintnSeGjbG, {from: accounts[0]});
		const boolVokIL2 = await XenoFelixWA9k3P0.transferFrom.call(addressQieZTxz, addressySXHSRE, uintpqK7oP7, {from: accounts[0]});
		const boolGKHVz08 = await XenoFelixWA9k3P0.transfer.call(addresszlw53VW, uintmctC15b, {from: accounts[4]});
		const addresszGsB9BH = await XenoFelixWA9k3P0.burnFrom.call(addressnUn1oBR, uintfLBiSQ, {from: accounts[5]});
		const boolvSKMRDd = await XenoFelixWA9k3P0.unlock.call(addressaoXMSo2, uintbM2R6dV, {from: accounts[1]});
		await XenoFelixWA9k3P0.onlyOwner.call({from: accounts[2]});

		await expect(XenoFelixWA9k3P0.decreaseAllowance.call(addressoErglND, uintnSeGjbG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintScBIgt = BigInt("1890")
		const uintp6QArOI = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintScBIgt, uintp6QArOI, {from: accounts[2]});
		const addresseHsF5U7 = accounts[3]
		const addressebVKtUM = accounts[1]
		const addressmzrQQqf = accounts[1]
		const addressue5FdR6 = accounts[4]
		const uintqYoW3Bq = BigInt("115")
		const addressYehrhg3 = accounts[2]
		const uint256ewfRhUd = await XenoFelixWA9k3P0.balanceOf.call(addresseHsF5U7, {from: accounts[2]});
		const uint256mgw0s27 = await XenoFelixWA9k3P0.allowance.call(addressmzrQQqf, addressebVKtUM, {from: accounts[2]});
		const boolXCIfn14 = await XenoFelixWA9k3P0.isOwner.call(addressue5FdR6, {from: accounts[4]});
		const boollcuMF4 = await XenoFelixWA9k3P0.transfer.call(addressYehrhg3, uintqYoW3Bq, {from: accounts[3]});
		await XenoFelixWA9k3P0.onlyPauser.call({from: accounts[2]});
		const boolEjUufT2 = await XenoFelixWA9k3P0.acceptOwnership.call({from: accounts[3]});

		assert.equal(boolXCIfn14, false)
		assert.equal(uint256ewfRhUd, BigInt("0"))
		assert.equal(uint256mgw0s27, BigInt("0"))
		await expect(XenoFelixWA9k3P0.transfer.call(addressYehrhg3, uintqYoW3Bq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintgsEPqK = BigInt("1890")
		const uintjQRKeQ = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintgsEPqK, uintjQRKeQ, {from: accounts[2]});
		const addressFf30zp9 = accounts[3]
		const addressFgcsTFu = accounts[5]
		const uintjH9W4ZF = BigInt("1714")
		const addressxs8A5pm = accounts[1]
		const uintcMNL1X2 = BigInt("115")
		const addressyowCruj = accounts[2]
		const addressckoCBHi = accounts[1]
		const uintY0IJs6z = BigInt("1865")
		const addressmkM8kVc = accounts[3]
		const uint256ewfRhUd = await XenoFelixWA9k3P0.balanceOf.call(addressFf30zp9, {from: accounts[2]});
		const boolXCIfn14 = await XenoFelixWA9k3P0.isOwner.call(addressFgcsTFu, {from: accounts[4]});
		const addressUqrYNL = await XenoFelixWA9k3P0.burnFrom.call(addressxs8A5pm, uintjH9W4ZF, {from: accounts[0]});
		const boollcuMF4 = await XenoFelixWA9k3P0.transfer.call(addressyowCruj, uintcMNL1X2, {from: accounts[3]});
		const boolkhJfpC3 = await XenoFelixWA9k3P0.isPauser.call(addressckoCBHi, {from: accounts[4]});
		await XenoFelixWA9k3P0.onlyPauser.call({from: accounts[2]});
		const boolmpnfroY = await XenoFelixWA9k3P0.paused.call({from: accounts[4]});
		const boolWFJakCf = await XenoFelixWA9k3P0.transfer.call(addressmkM8kVc, uintY0IJs6z, {from: accounts[1]});
		const boolEjUufT2 = await XenoFelixWA9k3P0.acceptOwnership.call({from: accounts[3]});

		assert.equal(boolXCIfn14, false)
		assert.equal(uint256ewfRhUd, BigInt("0"))
		await expect(XenoFelixWA9k3P0.burnFrom.call(addressxs8A5pm, uintjH9W4ZF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintN1Z6MYy = BigInt("1890")
		const uintlfvJTcD = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintN1Z6MYy, uintlfvJTcD, {from: accounts[2]});
		const addressbaXS9uU = accounts[3]
		const addressP46BVxL = accounts[5]
		const addressgDhW9kH = accounts[4]
		const uintS3HChOl = BigInt("115")
		const addressJ4uWzm = accounts[2]
		const addressJNrb6QD = accounts[0]
		const addresslOfu07S = accounts[5]
		const uintHDApZr = BigInt("1865")
		const addressMUzd5WL = accounts[3]
		const uint256ewfRhUd = await XenoFelixWA9k3P0.balanceOf.call(addressbaXS9uU, {from: accounts[2]});
		const boolXCIfn14 = await XenoFelixWA9k3P0.isOwner.call(addressP46BVxL, {from: accounts[4]});
		const addressgZSzz4o = await XenoFelixWA9k3P0.removePauser.call(addressgDhW9kH, {from: accounts[2]});
		const boollcuMF4 = await XenoFelixWA9k3P0.transfer.call(addressJ4uWzm, uintS3HChOl, {from: accounts[3]});
		const boolkhJfpC3 = await XenoFelixWA9k3P0.isPauser.call(addressJNrb6QD, {from: accounts[4]});
		await XenoFelixWA9k3P0.onlyPauser.call({from: accounts[2]});
		const uint2566wFdvG = await XenoFelixWA9k3P0.balanceOf.call(addresslOfu07S, {from: accounts[4]});
		const boolmpnfroY = await XenoFelixWA9k3P0.paused.call({from: accounts[4]});
		const boolWFJakCf = await XenoFelixWA9k3P0.transfer.call(addressMUzd5WL, uintHDApZr, {from: accounts[1]});
		const boolEjUufT2 = await XenoFelixWA9k3P0.acceptOwnership.call({from: accounts[3]});

		assert.equal(boolXCIfn14, false)
		assert.equal(uint256ewfRhUd, BigInt("0"))
		await expect(XenoFelixWA9k3P0.removePauser.call(addressgDhW9kH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtRRYTnb = "QiAKQybzXdSv"
		const stringBeMHXP8 = "jAbpoau179hqlB1iPFd3"
		const uinthDUxDHH = BigInt("56")
		const XenoFelixLXyHtoz = await XenoFelix.new(stringtRRYTnb, stringBeMHXP8, uinthDUxDHH, {from: accounts[1]});
		const addresspgSdS6l = accounts[4]
		const addresszFdGKRn = accounts[5]
		const uintjF7Kine = BigInt("675")
		const addressW5kTGfz = accounts[2]
		const addresshvg5hO = accounts[1]
		const addressdQgIPcU = await XenoFelixLXyHtoz.notFrozen.call(addresspgSdS6l, {from: accounts[4]});
		await XenoFelixLXyHtoz.renouncePauser.call({from: accounts[0]});
		const addresskpyeDhL = await XenoFelixLXyHtoz.removePauser.call(addresszFdGKRn, {from: accounts[5]});
		const boolPttu2bL = await XenoFelixLXyHtoz.transferFrom.call(addresshvg5hO, addressW5kTGfz, uintjF7Kine, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringtZcB7z6 = "lF1fac8cWijQxkbGjknlem4mubRZh11hyOmqq4I7OyOy2CYJCI3Do3PQHJr97sDk1QrdKjNwKPz"
		const stringhjctJpy = "vjYttRWAT2VIkaxLs3R9U9lMsVme4jZA11Iam41Kz"
		const uintVek86ZL = BigInt("1313")
		const uintbt69WJO = BigInt("32")
		const XenoFelixqj570S = await XenoFelix.new(stringtZcB7z6, stringhjctJpy, uintVek86ZL, uintbt69WJO, {from: "0x0000000000000000000000000000000000000001"});
		const uintw4iqjMk = BigInt("1032")
		const addressR0uPqBG = accounts[0]
		const uintYdvjfjv = BigInt("1456")
		const uintqoVHMj6 = BigInt("1700")
		const addressrId1EpJ = accounts[4]
		const addressqmK3m7d = accounts[5]
		const addressgrFs4hI = "0x0000000000000000000000000000000000000001"
		const uintls1DCpR = BigInt("606")
		const addressQ5ZbH4r = "0x0000000000000000000000000000000000000001"
		const addressQmpw2oT = accounts[2]
		const boolnV5akk0 = await XenoFelixqj570S.burnOwner.call(addressR0uPqBG, uintw4iqjMk, {from: accounts[3]});
		const boolNRAEUW1 = await XenoFelixqj570S.transferWithLock.call(addressrId1EpJ, uintqoVHMj6, uintYdvjfjv, {from: accounts[4]});
		const uint256rDUru4 = await XenoFelixqj570S.balanceOf.call(addressqmK3m7d, {from: accounts[0]});
		const addressMHk13io = await XenoFelixqj570S.transferOwnership.call(addressgrFs4hI, {from: accounts[2]});
		const booluScOmVk = await XenoFelixqj570S.transferFrom.call(addressQmpw2oT, addressQ5ZbH4r, uintls1DCpR, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintDgPd2Yh = BigInt("1890")
		const uintwoTZ9EK = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintDgPd2Yh, uintwoTZ9EK, {from: accounts[2]});
		const addressOEm0IDz = accounts[2]
		const uintQs6H9nE = BigInt("665")
		const addressHl3DuT = accounts[1]
		const uint256ewfRhUd = await XenoFelixWA9k3P0.balanceOf.call(addressOEm0IDz, {from: accounts[2]});
		const boolLhuZpvD = await XenoFelixWA9k3P0.unlock.call(addressHl3DuT, uintQs6H9nE, {from: accounts[2]});

		assert.equal(uint256ewfRhUd, BigInt("89099691715483066297284708009858836464195315973791031965069994063966276419584"))
		await expect(XenoFelixWA9k3P0.unlock.call(addressHl3DuT, uintQs6H9nE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringgD8Pg6m = "Gf3FNq8blK9Xn9YWrrTqNv8IibYyhIaJykFJI5NH8MDiZyY7ohp2ICPhhnAUd3QT8hHQJg1XUK"
		const stringucAE4gx = "7FyYoFKwTcmRtuBLNzmyvRUmv89HkxzeLuUsm77uOXnDX0CI1Wa1DBDc5aqgYPyfrahjhNIWIdjdqZq6R"
		const uintsbTUwg = BigInt("172")
		const XenoFelixdmgcorf = await XenoFelix.new(stringgD8Pg6m, stringucAE4gx, uintsbTUwg, {from: accounts[4]});
		const addressQtMccK = accounts[4]
		const uintB5k6lsK = BigInt("1189")
		const addressnH9CzpD = accounts[1]
		const uintu0qcsOu = BigInt("971")
		const addressp2vg4Ug = accounts[2]
		const addressFDbiTX7 = accounts[0]
		const uintDFH6M7X = BigInt("905")
		const addressALTYV9C = accounts[1]
		const address87SlzR = accounts[2]
		const uint256rTsL0AE = await XenoFelixdmgcorf.balanceOf.call(addressQtMccK, {from: accounts[5]});
		const addresshlTi4Jc = await XenoFelixdmgcorf.burnFrom.call(addressnH9CzpD, uintB5k6lsK, {from: accounts[4]});
		const boolDcW0RQw = await XenoFelixdmgcorf.transferFrom.call(addressFDbiTX7, addressp2vg4Ug, uintu0qcsOu, {from: accounts[3]});
		const boolUXU4OBJ = await XenoFelixdmgcorf.transferFrom.call(address87SlzR, addressALTYV9C, uintDFH6M7X, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringp5C5dU = "xwkLzVvlMudL5E2PxBANSxfupdNkd3M2xZF5DjffLIqVmKyrwoLWrINRlAw8pUc3h7bkS9BfySbEekQL4ZixbIKtinuKJ2d5"
		const stringBqqwA8m = "oUhuIydDgBUAbOHsbOI4Zl49ARhWLVtlMOrJxzkSl"
		const uintHTlKjwf = BigInt("1946")
		const uintPhot6xo = BigInt("241")
		const XenoFelixoQDxMIu = await XenoFelix.new(stringp5C5dU, stringBqqwA8m, uintHTlKjwf, uintPhot6xo, {from: accounts[4]});
		const uintDP0DeaN = BigInt("1429")
		const addressYJmC8gP = accounts[6]
		const uintWFYJzUr = BigInt("1379")
		const addresswLabLQH = accounts[5]
		await XenoFelixoQDxMIu.pause.call({from: accounts[4]});
		await XenoFelixoQDxMIu.onlyOwner.call({from: accounts[4]});
		const boolJZ8Gm6W = await XenoFelixoQDxMIu.unlock.call(addressYJmC8gP, uintDP0DeaN, {from: accounts[1]});
		const boolCFxyIgK = await XenoFelixoQDxMIu.decreaseAllowance.call(addresswLabLQH, uintWFYJzUr, {from: accounts[2]});

		await expect(XenoFelixoQDxMIu.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYdvKQh5 = "06qhv"
		const stringn4PAYBv = "aToPCITmJTQGxPzPiwvpE4syiepdIL2AnKSQ3DvYVsPzcbxe"
		const uintu7FLQYs = BigInt("1890")
		const uintCgu2Kf5 = BigInt("128")
		const XenoFelixWA9k3P0 = await XenoFelix.new(stringYdvKQh5, stringn4PAYBv, uintu7FLQYs, uintCgu2Kf5, {from: accounts[2]});
		const addressgdBdMeN = accounts[2]
		const uinteN4yfP = BigInt("604")
		const uintlu4frag = BigInt("1554")
		const addressmwCAJar = accounts[0]
		const uintIsJoAQf = BigInt("1474")
		const addressvt5oBAG = accounts[6]
		const addressS9HMIC4 = accounts[4]
		const boolHUKrSOU = await XenoFelixWA9k3P0.isOwner.call(addressgdBdMeN, {from: accounts[0]});
		const boollPBpso4 = await XenoFelixWA9k3P0.transferWithLock.call(addressmwCAJar, uintlu4frag, uinteN4yfP, {from: accounts[4]});
		const boolVokIL2 = await XenoFelixWA9k3P0.transferFrom.call(addressS9HMIC4, addressvt5oBAG, uintIsJoAQf, {from: accounts[0]});

		assert.equal(boolHUKrSOU, true)
		await expect(XenoFelixWA9k3P0.transferWithLock.call(addressmwCAJar, uintlu4frag, uinteN4yfP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})