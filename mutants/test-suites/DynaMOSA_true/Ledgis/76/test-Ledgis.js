const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisujsQN4r = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintj5WXM6W = BigInt("804")
		const uintC1LQRGO = BigInt("2037")
		const addressTy2xFD6 = accounts[0]
		const addressMsFrg5W = "0x0000000000000000000000000000000000000001"
		const uinteQMuynQ = BigInt("1542")
		const addressHFROa4 = accounts[1]
		const uintvWqbkry = BigInt("1240")
		const uintGgQ369E = BigInt("1697")
		const addressYQxl6op = accounts[3]
		const addressfJohrfO = await LedgisujsQN4r.lockAfter.call(addressTy2xFD6, uintC1LQRGO, uintj5WXM6W, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sGBAsZ = await LedgisujsQN4r.lockCount.call(addressMsFrg5W, {from: accounts[1]});
		await LedgisujsQN4r.lockState.call(addressHFROa4, uinteQMuynQ, {from: accounts[2]});
		const addresstTkUAGH = await LedgisujsQN4r.lockAfter.call(addressYQxl6op, uintGgQ369E, uintvWqbkry, {from: accounts[0]});
		const uint256cg0T93e = await LedgisujsQN4r.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Ledgis', async () => {
		const LedgisZgzK7Ta = await Ledgis.new({from: accounts[4]});
		const uintNf7mada = BigInt("1859")
		const uintZXa5sPz = BigInt("1991")
		const addressRLBFmgp = accounts[1]
//		await LedgisZgzK7Ta.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressRjsAgtg = await LedgisZgzK7Ta.lockAfter.call(addressRLBFmgp, uintZXa5sPz, uintNf7mada, {from: accounts[5]});

		await expect(LedgisZgzK7Ta.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispJ6ywoo = await Ledgis.new({from: accounts[2]});
		const uinttCAoUcF = BigInt("108")
		const addressIjGkodq = accounts[5]
		const addressdaXMFyU = accounts[3]
		const uintpKmX3cP = BigInt("936")
		const addressy7yf93 = accounts[2]
		const addressGAQ2sP6 = accounts[3]
		const addressQ1vDC8B = accounts[3]
//		const boolmukhFwO = await LedgispJ6ywoo.transferFrom.call(addressdaXMFyU, addressIjGkodq, uinttCAoUcF, {from: accounts[3]});
//		const boolkVdSwl = await LedgispJ6ywoo.approve.call(addressy7yf93, uintpKmX3cP, {from: accounts[2]});
//		await LedgispJ6ywoo.onlyOwner.call({from: accounts[5]});
//		const uint256yYCvQkm = await LedgispJ6ywoo.allowance.call(addressQ1vDC8B, addressGAQ2sP6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgispJ6ywoo.transferFrom.call(addressdaXMFyU, addressIjGkodq, uinttCAoUcF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswUpdWCg = await Ledgis.new({from: accounts[1]});
		const uintEa5Ht6r = BigInt("142")
		const addressmTUIGka = accounts[0]
		const addressgrJyUZY = accounts[0]
		const uintZgkpdtl = BigInt("963")
		const addresskrrVGNh = accounts[0]
//		const boolT51TrDp = await LedgiswUpdWCg.transfer.call(addressmTUIGka, uintEa5Ht6r, {from: accounts[4]});
//		const addressvZ8OpL9 = await LedgiswUpdWCg.freeze.call(addressgrJyUZY, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNcmWmiD = await LedgiswUpdWCg.increaseAllowance.call(addresskrrVGNh, uintZgkpdtl, {from: accounts[5]});

		await expect(LedgiswUpdWCg.transfer.call(addressmTUIGka, uintEa5Ht6r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisx0ZYbvz = await Ledgis.new({from: accounts[4]});
		const uintuzyvlpa = BigInt("389")
		const addressffJJWoS = accounts[2]
		const uintv3Lh7G2 = BigInt("416")
		const addressP94mtNJ = accounts[1]
		const address4jQjjj = accounts[0]
		const uint256dPfU9a7 = await Ledgisx0ZYbvz.afterTime.call(uintuzyvlpa, {from: accounts[5]});
//		await Ledgisx0ZYbvz.whenNotFrozen.call({from: accounts[3]});
//		const boolPT0FhDk = await Ledgisx0ZYbvz.isFrozen.call(addressffJJWoS, {from: accounts[3]});
//		const boolK9tMeJE = await Ledgisx0ZYbvz.transferFrom.call(address4jQjjj, addressP94mtNJ, uintv3Lh7G2, {from: accounts[0]});

		assert.equal(uint256dPfU9a7, BigInt("1630231640"))
		await expect(Ledgisx0ZYbvz.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskCYJ9aZ = await Ledgis.new({from: accounts[4]});
		const uintNQJUEY = BigInt("1115")
		const addressxT8wEum = "0x0000000000000000000000000000000000000001"
		const addresscgfUxyt = "0x0000000000000000000000000000000000000001"
		const uintgahkTAX = BigInt("1688")
		const addressyaiqloZ = accounts[5]
		const addressX4nKn1l = accounts[2]
//		const addressB8bRkGK = await LedgiskCYJ9aZ.unlock.call(addressxT8wEum, uintNQJUEY, {from: accounts[4]});
//		const boolI8l2nEm = await LedgiskCYJ9aZ.isFrozen.call(addresscgfUxyt, {from: accounts[0]});
//		const boolvCDEZrl = await LedgiskCYJ9aZ.transferFrom.call(addressX4nKn1l, addressyaiqloZ, uintgahkTAX, {from: accounts[2]});
//		const uint256D7tUz9 = await LedgiskCYJ9aZ.currentTime.call({from: accounts[2]});

		await expect(LedgiskCYJ9aZ.unlock.call(addressxT8wEum, uintNQJUEY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYg5GSUC = await Ledgis.new({from: accounts[2]});
		const addresselsHVQX = accounts[2]
		const addressey6WzYi = accounts[4]
		const uintsHMpbK = BigInt("620")
		const uintotxGsF = BigInt("129")
		const addressoMv8aHh = accounts[2]
		const uintnJjJBmX = BigInt("555")
		const uintfsZ9o3K = BigInt("717")
		const addressVi6ujhX = accounts[5]
//		const addresswe76an5 = await LedgisYg5GSUC.unfreeze.call(addresselsHVQX, {from: accounts[4]});
//		const uint256xktdgqw = await LedgisYg5GSUC.balanceOf.call(addressey6WzYi, {from: accounts[0]});
//		await LedgisYg5GSUC.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressojGuaTL = await LedgisYg5GSUC.lock.call(addressoMv8aHh, uintotxGsF, uintsHMpbK, {from: accounts[2]});
//		await LedgisYg5GSUC.pause.call({from: accounts[5]});
//		const addressT6spUzr = await LedgisYg5GSUC.lock.call(addressVi6ujhX, uintfsZ9o3K, uintnJjJBmX, {from: accounts[3]});

		await expect(LedgisYg5GSUC.unfreeze.call(addresselsHVQX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisprM8YiB = await Ledgis.new({from: accounts[0]});
		const addressjUgyJGH = accounts[1]
		const uintqVw8DD = BigInt("1495")
		const addressMdCjGiJ = accounts[4]
		const addressgHAWpT8 = accounts[4]
		const addressBiuwg6x = accounts[4]
		const uint256xZvtiKG = await LedgisprM8YiB.lockCount.call(addressjUgyJGH, {from: accounts[4]});
		const boolD97x2fl = await LedgisprM8YiB.increaseAllowance.call(addressMdCjGiJ, uintqVw8DD, {from: accounts[0]});
		const uint256YOc1m0S = await LedgisprM8YiB.allowance.call(addressBiuwg6x, addressgHAWpT8, {from: accounts[1]});

		assert.equal(boolD97x2fl, true)
		assert.equal(uint256YOc1m0S, BigInt("0"))
		assert.equal(uint256xZvtiKG, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisYg5GSUC = await Ledgis.new({from: accounts[2]});
		const addresszBzlN2R = accounts[4]
		const uintkN26CLd = BigInt("620")
		const uintkRe7rnc = BigInt("129")
		const addressTuhwA10 = accounts[2]
		const uintBUriztb = BigInt("555")
		const uintfrTpETO = BigInt("717")
		const addresscaGvTE3 = accounts[5]
		const uint256xktdgqw = await LedgisYg5GSUC.balanceOf.call(addresszBzlN2R, {from: accounts[0]});
//		await LedgisYg5GSUC.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressojGuaTL = await LedgisYg5GSUC.lock.call(addressTuhwA10, uintkRe7rnc, uintkN26CLd, {from: accounts[2]});
//		await LedgisYg5GSUC.pause.call({from: accounts[5]});
//		const addressT6spUzr = await LedgisYg5GSUC.lock.call(addresscaGvTE3, uintfrTpETO, uintBUriztb, {from: accounts[3]});

		assert.equal(uint256xktdgqw, BigInt("0"))
		await expect(LedgisYg5GSUC.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa0Q2wYM = await Ledgis.new({from: accounts[2]});
		const addressliDOA1v = accounts[2]
		const uintQ6ziWC = BigInt("1829")
		const uintKxOP0IW = BigInt("1148")
		const addressCjaFVl = accounts[2]
		const uint256slFxCnJ = await Ledgisa0Q2wYM.balanceOf.call(addressliDOA1v, {from: "0x0000000000000000000000000000000000000001"});
		const addressSlkuiN6 = await Ledgisa0Q2wYM.lock.call(addressCjaFVl, uintKxOP0IW, uintQ6ziWC, {from: accounts[2]});
//		await Ledgisa0Q2wYM.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256slFxCnJ, BigInt("10000000000000"))
		await expect(Ledgisa0Q2wYM.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswUpdWCg = await Ledgis.new({from: accounts[1]});
		const uintiz1mzhR = BigInt("501")
		const addressG6MkEs = accounts[4]
		const addressG8njjsE = accounts[4]
		const uintnOXB3Kp = BigInt("142")
		const addressbndCbn = accounts[1]
		const addressSIVX1kB = accounts[0]
//		const addressgBRpLlL = await LedgiswUpdWCg.burn.call(addressG6MkEs, uintiz1mzhR, {from: accounts[1]});
//		const addressCdKQWWY = await LedgiswUpdWCg.unfreeze.call(addressG8njjsE, {from: accounts[1]});
//		const boolT51TrDp = await LedgiswUpdWCg.transfer.call(addressbndCbn, uintnOXB3Kp, {from: accounts[4]});
//		const addressvZ8OpL9 = await LedgiswUpdWCg.freeze.call(addressSIVX1kB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgiswUpdWCg.burn.call(addressG6MkEs, uintiz1mzhR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskCYJ9aZ = await Ledgis.new({from: accounts[4]});
		const addressKIwhHu = "0x0000000000000000000000000000000000000001"
		const uintk66mWL6 = BigInt("1688")
		const addressC7wUJZ4 = accounts[6]
		const addressQ3pLygT = accounts[2]
		const boolI8l2nEm = await LedgiskCYJ9aZ.isFrozen.call(addressKIwhHu, {from: accounts[0]});
//		const boolvCDEZrl = await LedgiskCYJ9aZ.transferFrom.call(addressQ3pLygT, addressC7wUJZ4, uintk66mWL6, {from: accounts[2]});
//		const uint256D7tUz9 = await LedgiskCYJ9aZ.currentTime.call({from: accounts[2]});

		assert.equal(boolI8l2nEm, false)
		await expect(LedgiskCYJ9aZ.transferFrom.call(addressQ3pLygT, addressC7wUJZ4, uintk66mWL6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisclL7cuC = await Ledgis.new({from: accounts[0]});
		const uintyOmxQoF = BigInt("1133")
		const uinta7HLRl = BigInt("1332")
		const addressZmaMahN = accounts[2]
		const uintHxBhSH = BigInt("382")
		const uintihdNJu4 = BigInt("1173")
		const addressgoUKtXi = accounts[4]
		const boolqBV7vBX = await LedgisclL7cuC.transferWithLock.call(addressZmaMahN, uinta7HLRl, uintyOmxQoF, {from: accounts[0]});
//		await LedgisclL7cuC.pause.call({from: accounts[0]});
//		const uint256ktBsrgp = await LedgisclL7cuC.afterTime.call(uintHxBhSH, {from: accounts[1]});
//		const addressO6b9zoT = await LedgisclL7cuC.burn.call(addressgoUKtXi, uintihdNJu4, {from: accounts[3]});

		assert.equal(boolqBV7vBX, true)
		await expect(LedgisclL7cuC.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskCYJ9aZ = await Ledgis.new({from: accounts[4]});
		const uintgUUzC1 = BigInt("846")
		const addressbl3Z2Sz = accounts[2]
		const addressvYEl73K = accounts[4]
		const uintv5VqKcb = BigInt("1102")
		const addressHeKflXm = "0x0000000000000000000000000000000000000001"
		const addressOQ25C04 = "0x0000000000000000000000000000000000000000"
		const uint256BW7wr3Y = await LedgiskCYJ9aZ.totalSupply.call({from: accounts[3]});
//		const boolGqBxQiz = await LedgiskCYJ9aZ.transferFrom.call(addressvYEl73K, addressbl3Z2Sz, uintgUUzC1, {from: accounts[1]});
//		await LedgiskCYJ9aZ.whenNotFrozen.call({from: accounts[2]});
//		const addressB8bRkGK = await LedgiskCYJ9aZ.unlock.call(addressHeKflXm, uintv5VqKcb, {from: accounts[4]});
//		const boolI8l2nEm = await LedgiskCYJ9aZ.isFrozen.call(addressOQ25C04, {from: accounts[0]});
//		const uint256D7tUz9 = await LedgiskCYJ9aZ.currentTime.call({from: accounts[2]});

		assert.equal(uint256BW7wr3Y, BigInt("10000000000000"))
		await expect(LedgiskCYJ9aZ.transferFrom.call(addressvYEl73K, addressbl3Z2Sz, uintgUUzC1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa0Q2wYM = await Ledgis.new({from: accounts[2]});
		const addressR4AN1ze = accounts[2]
		const uintXdL9AAP = BigInt("1569")
		const addressIwLi9R = accounts[0]
		const addressI8zWLmT = accounts[3]
		const uint256slFxCnJ = await Ledgisa0Q2wYM.balanceOf.call(addressR4AN1ze, {from: "0x0000000000000000000000000000000000000001"});
		const boolz5y4uU = await Ledgisa0Q2wYM.approve.call(addressIwLi9R, uintXdL9AAP, {from: accounts[0]});
//		await Ledgisa0Q2wYM.pause.call({from: accounts[1]});
//		await Ledgisa0Q2wYM.unpause.call({from: accounts[2]});
//		await Ledgisa0Q2wYM.pause.call({from: accounts[0]});
//		await Ledgisa0Q2wYM.pause.call({from: accounts[5]});
//		const addressf94AD9V = await Ledgisa0Q2wYM.freeze.call(addressI8zWLmT, {from: accounts[4]});

		assert.equal(boolz5y4uU, true)
		assert.equal(uint256slFxCnJ, BigInt("10000000000000"))
		await expect(Ledgisa0Q2wYM.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskCYJ9aZ = await Ledgis.new({from: accounts[4]});
		const addressySK5Evd = accounts[3]
		const uint256D7tUz9 = await LedgiskCYJ9aZ.currentTime.call({from: accounts[2]});
		const uint256oYAKJd6 = await LedgiskCYJ9aZ.balanceOf.call(addressySK5Evd, {from: accounts[4]});

		assert.equal(uint256D7tUz9, BigInt("1630231260"))
		assert.equal(uint256oYAKJd6, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgisa0Q2wYM = await Ledgis.new({from: accounts[2]});
		const addressA98EO7t = accounts[3]
		const addressyBBA8Hj = accounts[4]
		const uintV0waL8U = BigInt("93")
		const uintYj25puF = BigInt("2026")
		const addresseLY20I3 = accounts[0]
		const address9J806d = accounts[1]
		const uintE7RoAH = BigInt("638")
		const addressVo9aT75 = accounts[2]
		const uint256slFxCnJ = await Ledgisa0Q2wYM.balanceOf.call(addressA98EO7t, {from: "0x0000000000000000000000000000000000000001"});
		const boolsCCSyXG = await Ledgisa0Q2wYM.isFrozen.call(addressyBBA8Hj, {from: accounts[1]});
		const boolbiMhqLV = await Ledgisa0Q2wYM.transferWithLockAfter.call(addresseLY20I3, uintYj25puF, uintV0waL8U, {from: accounts[2]});
//		const addressL3pjQ0G = await Ledgisa0Q2wYM.unfreeze.call(address9J806d, {from: accounts[1]});
//		const addressYHQTBNE = await Ledgisa0Q2wYM.unlock.call(addressVo9aT75, uintE7RoAH, {from: accounts[2]});

		assert.equal(boolbiMhqLV, true)
		assert.equal(boolsCCSyXG, false)
		assert.equal(uint256slFxCnJ, BigInt("0"))
		await expect(Ledgisa0Q2wYM.unfreeze.call(address9J806d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa0Q2wYM = await Ledgis.new({from: accounts[2]});
		const uintzb9ak6 = BigInt("562")
		const addresszz1rtKN = accounts[3]
		const addressSKb10e8 = accounts[3]
//		const boolh045cLO = await Ledgisa0Q2wYM.decreaseAllowance.call(addresszz1rtKN, uintzb9ak6, {from: accounts[1]});
//		const uint256slFxCnJ = await Ledgisa0Q2wYM.balanceOf.call(addressSKb10e8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Ledgisa0Q2wYM.decreaseAllowance.call(addresszz1rtKN, uintzb9ak6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAC7fxLb = await Ledgis.new({from: accounts[1]});
		const uintCZD92r7 = BigInt("2028")
		const addressTWCywA0 = accounts[0]
		const addressm4A1VGi = accounts[4]
		const addressttd9CUi = accounts[3]
//		await LedgisAC7fxLb.lockState.call(addressTWCywA0, uintCZD92r7, {from: accounts[3]});
//		await LedgisAC7fxLb.onlyOwner.call({from: accounts[0]});
//		const uint256MvS9ODG = await LedgisAC7fxLb.allowance.call(addressttd9CUi, addressm4A1VGi, {from: accounts[1]});

		await expect(LedgisAC7fxLb.lockState.call(addressTWCywA0, uintCZD92r7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa0Q2wYM = await Ledgis.new({from: accounts[2]});
		const addressYWmVTC = accounts[1]
		const addressxE5coMN = accounts[2]
		const addressvrCr5gB = await Ledgisa0Q2wYM.freeze.call(addressYWmVTC, {from: accounts[2]});
		const uint256slFxCnJ = await Ledgisa0Q2wYM.balanceOf.call(addressxE5coMN, {from: "0x0000000000000000000000000000000000000001"});
//		await Ledgisa0Q2wYM.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256slFxCnJ, BigInt("10000000000000"))
		await expect(Ledgisa0Q2wYM.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisrtfapjW = await Ledgis.new({from: accounts[2]});
		const addressZKwdHin = "0x0000000000000000000000000000000000000001"
		const uintUspbupm = BigInt("1013")
		const addresswuGUxiJ = "0x0000000000000000000000000000000000000001"
		const addressZkuafd5 = accounts[3]
//		await LedgisrtfapjW.unpause.call({from: accounts[2]});
//		const addressX1jNKt = await LedgisrtfapjW.transferOwnership.call(addressZKwdHin, {from: accounts[3]});
//		const booljNGG4ih = await LedgisrtfapjW.transferFrom.call(addressZkuafd5, addresswuGUxiJ, uintUspbupm, {from: accounts[3]});

		await expect(LedgisrtfapjW.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMncZrKd = await Ledgis.new({from: accounts[3]});
		const addresskYEXhwy = accounts[2]
		const uintqrbHXfG = BigInt("14")
		const addressp2aeN7e = accounts[2]
		const addressWEuQN6 = accounts[0]
		const uintRlm3R8 = BigInt("142")
		const addressdnTsb00 = accounts[2]
		const addressrQo3G1S = accounts[2]
		const addressIFarKUX = accounts[5]
		const addressZQWXJ36 = await LedgisMncZrKd.unfreeze.call(addresskYEXhwy, {from: accounts[3]});
//		const boolHhSAZpA = await LedgisMncZrKd.transferFrom.call(addressWEuQN6, addressp2aeN7e, uintqrbHXfG, {from: accounts[4]});
//		const boolcSIcdrt = await LedgisMncZrKd.mint.call(addressdnTsb00, uintRlm3R8, {from: accounts[2]});
//		const uint256N2JLAB = await LedgisMncZrKd.allowance.call(addressIFarKUX, addressrQo3G1S, {from: accounts[3]});

		await expect(LedgisMncZrKd.transferFrom.call(addressWEuQN6, addressp2aeN7e, uintqrbHXfG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswUpdWCg = await Ledgis.new({from: accounts[1]});
		const uintGg7OZcD = BigInt("2029")
		const addressiZZahco = accounts[0]
		const uintPJFehWa = BigInt("142")
		const addressd75jn6 = accounts[1]
		const boolwXeMwh0 = await LedgiswUpdWCg.mint.call(addressiZZahco, uintGg7OZcD, {from: accounts[1]});
//		const boolT51TrDp = await LedgiswUpdWCg.transfer.call(addressd75jn6, uintPJFehWa, {from: accounts[4]});

		assert.equal(boolwXeMwh0, true)
		await expect(LedgiswUpdWCg.transfer.call(addressd75jn6, uintPJFehWa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa0Q2wYM = await Ledgis.new({from: accounts[2]});
		const addressrhAOHR = accounts[3]
		const addressvmGQrfa = accounts[3]
		const addressHszsIk0 = await Ledgisa0Q2wYM.transferOwnership.call(addressrhAOHR, {from: accounts[2]});
		const uint256slFxCnJ = await Ledgisa0Q2wYM.balanceOf.call(addressvmGQrfa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256slFxCnJ, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgisa0Q2wYM = await Ledgis.new({from: accounts[2]});
		const addressEe8uH8E = accounts[1]
		const addressZ3zLKOj = accounts[3]
		const uintNrkv6Lm = BigInt("402")
		const uintutn7Xjw = BigInt("1028")
		const addresse3c6asJ = accounts[4]
		const uint256zUds4Gt = await Ledgisa0Q2wYM.balanceOf.call(addressEe8uH8E, {from: accounts[4]});
		const uint256slFxCnJ = await Ledgisa0Q2wYM.balanceOf.call(addressZ3zLKOj, {from: "0x0000000000000000000000000000000000000001"});
//		const addressTlwPH3i = await Ledgisa0Q2wYM.lockAfter.call(addresse3c6asJ, uintutn7Xjw, uintNrkv6Lm, {from: accounts[2]});

		assert.equal(uint256slFxCnJ, BigInt("0"))
		assert.equal(uint256zUds4Gt, BigInt("0"))
		await expect(Ledgisa0Q2wYM.lockAfter.call(addresse3c6asJ, uintutn7Xjw, uintNrkv6Lm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskCYJ9aZ = await Ledgis.new({from: accounts[4]});
		const uintN5FIo9V = BigInt("1115")
		const addresstojyd6X = "0x0000000000000000000000000000000000000001"
//		await LedgiskCYJ9aZ.renounceOwnership.call({from: accounts[4]});
//		const addressB8bRkGK = await LedgiskCYJ9aZ.unlock.call(addresstojyd6X, uintN5FIo9V, {from: accounts[4]});

		await expect(LedgiskCYJ9aZ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})