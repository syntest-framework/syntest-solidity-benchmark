const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringydi2dQt = "K2VpJsoT5Q2pAzYO5Ic9GRA44CnPu9qfTdIYpLPUJlTcC16DylXTH8S4wU4ZbjKiYNCfntQ8g"
		const stringiMOWTAd = "eC0rI1ExBd4nQ6rCflwrRmoEha6jJz"
		const uintk3a4FyJ = BigInt("137")
		const WeedburnWfIcE3Y = await Weedburn.new(stringydi2dQt, stringiMOWTAd, uintk3a4FyJ, {from: accounts[2]});
		const uintwWDhlZQ = BigInt("270")
		const addressWRXj9T = accounts[0]
		await WeedburnWfIcE3Y.disableLimitMode.call({from: accounts[2]});
		const uint256ByDmerj = await WeedburnWfIcE3Y.burn.call(uintwWDhlZQ, {from: accounts[4]});
		const uint256JFUW6jo = await WeedburnWfIcE3Y.balanceOf.call(addressWRXj9T, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const WeedburnnKKgDeV = await Weedburn.new({from: accounts[4]});
		const uintgEbFVgZ = BigInt("1221")
		const addressItKm1nj = accounts[1]
		const uintcj3tkq = BigInt("482")
		const addressbU77viV = accounts[4]
		const uintuftodah = BigInt("1202")
		const addressT5Ww2kX = accounts[0]
		const boolATa9UxS = await WeedburnnKKgDeV.transfer.call(addressItKm1nj, uintgEbFVgZ, {from: accounts[4]});
//		const boolJC8Gxcq = await WeedburnnKKgDeV.transfer.call(addressbU77viV, uintcj3tkq, {from: accounts[2]});
//		const boolEt5bIrV = await WeedburnnKKgDeV.transfer.call(addressT5Ww2kX, uintuftodah, {from: accounts[0]});

		assert.equal(boolATa9UxS, true)
		await expect(WeedburnnKKgDeV.transfer.call(addressbU77viV, uintcj3tkq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndSuoyoB = await Weedburn.new({from: accounts[4]});
		const uintiJTD6XZ = BigInt("1499")
		const addressu8fctd7 = accounts[0]
//		await WeedburndSuoyoB.disableLimitMode.call({from: accounts[2]});
//		const boolmil9H7Q = await WeedburndSuoyoB.decreaseAllowance.call(addressu8fctd7, uintiJTD6XZ, {from: accounts[4]});
//		await WeedburndSuoyoB.enableLimitMode.call({from: accounts[5]});

		await expect(WeedburndSuoyoB.disableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndSuoyoB = await Weedburn.new({from: accounts[4]});
		const uintAcvdgAT = BigInt("1499")
		const addressc6pEgrC = accounts[0]
//		const boolmil9H7Q = await WeedburndSuoyoB.decreaseAllowance.call(addressc6pEgrC, uintAcvdgAT, {from: accounts[4]});
//		await WeedburndSuoyoB.enableLimitMode.call({from: accounts[5]});

		await expect(WeedburndSuoyoB.decreaseAllowance.call(addressc6pEgrC, uintAcvdgAT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDvzpPzo = await Weedburn.new({from: accounts[4]});
		const uintkYmc1Lk = BigInt("268")
		const addresscjFNFn2 = accounts[3]
		const stringlddZ6tl = await WeedburnDvzpPzo.name.call({from: accounts[0]});
//		await WeedburnDvzpPzo.disableDevMode.call({from: accounts[2]});
//		const uint8Lbjwy9X = await WeedburnDvzpPzo.decimals.call({from: accounts[2]});
//		const boolnsRIyZc = await WeedburnDvzpPzo.approve.call(addresscjFNFn2, uintkYmc1Lk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringlddZ6tl, "t.me/burnweed1")
		await expect(WeedburnDvzpPzo.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnKKgDeV = await Weedburn.new({from: accounts[4]});
		const uintldJAsBT = BigInt("1221")
		const addressfwRJpBO = accounts[1]
		const uintQtXarMe = BigInt("91")
		const address8QetZd = "0x0000000000000000000000000000000000000001"
		const uintxlnB0M7 = BigInt("1204")
		const addressTt2BpIC = accounts[4]
		const uintEaW8rh9 = BigInt("468")
		const addressCEACPpU = accounts[3]
		const uintNUqzh4 = BigInt("1202")
		const addressFcDTxAb = accounts[0]
		const boolATa9UxS = await WeedburnnKKgDeV.transfer.call(addressfwRJpBO, uintldJAsBT, {from: accounts[4]});
//		const addressPcanSZK = await WeedburnnKKgDeV.burnFrom.call(address8QetZd, uintQtXarMe, {from: accounts[3]});
//		const boolJC8Gxcq = await WeedburnnKKgDeV.transfer.call(addressTt2BpIC, uintxlnB0M7, {from: accounts[2]});
//		const boolodQQng = await WeedburnnKKgDeV.transfer.call(addressCEACPpU, uintEaW8rh9, {from: accounts[0]});
//		const boolEt5bIrV = await WeedburnnKKgDeV.transfer.call(addressFcDTxAb, uintNUqzh4, {from: accounts[0]});

		assert.equal(boolATa9UxS, true)
		await expect(WeedburnnKKgDeV.burnFrom.call(address8QetZd, uintQtXarMe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndSuoyoB = await Weedburn.new({from: accounts[4]});
//		await WeedburndSuoyoB.enableLimitMode.call({from: accounts[5]});

		await expect(WeedburndSuoyoB.enableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnlQmouVf = await Weedburn.new({from: accounts[0]});
//		await WeedburnlQmouVf.enableDevMode.call({from: accounts[1]});
//		const stringjIIftuW = await WeedburnlQmouVf.name.call({from: accounts[5]});
//		const uint8wkKR1G8 = await WeedburnlQmouVf.decimals.call({from: accounts[3]});
//		await WeedburnlQmouVf.enableLimitMode.call({from: accounts[2]});
//		const uint8c06lwfj = await WeedburnlQmouVf.decimals.call({from: accounts[5]});

		await expect(WeedburnlQmouVf.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndSuoyoB = await Weedburn.new({from: accounts[4]});
		const uintrJkR4u9 = BigInt("784")
		const addressSwQu8FI = accounts[0]
		const uintwm6rLw = BigInt("1499")
		const addressokoCkLG = accounts[0]
		const boolIbeMcp6 = await WeedburndSuoyoB.increaseAllowance.call(addressSwQu8FI, uintrJkR4u9, {from: accounts[0]});
//		const boolmil9H7Q = await WeedburndSuoyoB.decreaseAllowance.call(addressokoCkLG, uintwm6rLw, {from: accounts[4]});

		assert.equal(boolIbeMcp6, true)
		await expect(WeedburndSuoyoB.decreaseAllowance.call(addressokoCkLG, uintwm6rLw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndSuoyoB = await Weedburn.new({from: accounts[4]});
		const uintNFUewnY = BigInt("1655")
		const uintibdL3Bn = BigInt("1499")
		const addressgXlWok7 = accounts[0]
		const uint2560T1xy3 = await WeedburndSuoyoB.burn.call(uintNFUewnY, {from: accounts[4]});
//		const boolmil9H7Q = await WeedburndSuoyoB.decreaseAllowance.call(addressgXlWok7, uintibdL3Bn, {from: accounts[4]});

		await expect(WeedburndSuoyoB.decreaseAllowance.call(addressgXlWok7, uintibdL3Bn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnKKgDeV = await Weedburn.new({from: accounts[4]});
		const uintE5TClx4 = BigInt("1433")
		const addressc7we0ES = accounts[2]
		const addressUr3iCeo = accounts[0]
		const uintfOdkKWe = BigInt("1221")
		const addressWXjOuvX = accounts[1]
		const uinto8YAGjN = BigInt("482")
		const addressQfqjysV = accounts[4]
		const uintqkquFmk = BigInt("1202")
		const addresszT5pCgL = accounts[1]
//		const boolvq4mh0k = await WeedburnnKKgDeV.transferFrom.call(addressUr3iCeo, addressc7we0ES, uintE5TClx4, {from: accounts[1]});
//		const boolATa9UxS = await WeedburnnKKgDeV.transfer.call(addressWXjOuvX, uintfOdkKWe, {from: accounts[4]});
//		const boolJC8Gxcq = await WeedburnnKKgDeV.transfer.call(addressQfqjysV, uinto8YAGjN, {from: accounts[2]});
//		const boolEt5bIrV = await WeedburnnKKgDeV.transfer.call(addresszT5pCgL, uintqkquFmk, {from: accounts[0]});

		await expect(WeedburnnKKgDeV.transferFrom.call(addressUr3iCeo, addressc7we0ES, uintE5TClx4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndSuoyoB = await Weedburn.new({from: accounts[4]});
		const uintKn5GP2G = BigInt("1494")
		const addressBJrMSsN = accounts[0]
		const stringadHPCl2 = await WeedburndSuoyoB.symbol.call({from: accounts[4]});
//		const boolmil9H7Q = await WeedburndSuoyoB.decreaseAllowance.call(addressBJrMSsN, uintKn5GP2G, {from: accounts[4]});

		assert.equal(stringadHPCl2, "Weedburn")
		await expect(WeedburndSuoyoB.decreaseAllowance.call(addressBJrMSsN, uintKn5GP2G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsjBBLB = await Weedburn.new({from: accounts[1]});
		const uintli3s8uj = BigInt("1404")
		const addresshTzWAnv = accounts[1]
		const addressWmxAmnK = accounts[3]
		const boolRZKohyY = await WeedburnsjBBLB.increaseAllowance.call(addresshTzWAnv, uintli3s8uj, {from: accounts[0]});
		const uint256GsuehEW = await WeedburnsjBBLB.balanceOf.call(addressWmxAmnK, {from: accounts[2]});
		const uint256Y88JRFA = await WeedburnsjBBLB.totalSupply.call({from: accounts[2]});

		assert.equal(boolRZKohyY, true)
		assert.equal(uint256GsuehEW, BigInt("0"))
		assert.equal(uint256Y88JRFA, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnL216Me = await Weedburn.new({from: accounts[5]});
		const addressO1cbh4H = accounts[0]
		const addressWrAcd5j = accounts[4]
		const uintfKWMgx3 = BigInt("1029")
		const addressQiLkoWS = accounts[4]
		const uint256RzfaGP = await WeedburnL216Me.allowance.call(addressWrAcd5j, addressO1cbh4H, {from: accounts[3]});
//		await WeedburnL216Me.disableLimitMode.call({from: accounts[2]});
//		const boolcOyAPy = await WeedburnL216Me.increaseAllowance.call(addressQiLkoWS, uintfKWMgx3, {from: accounts[2]});
//		const stringWCYYRg = await WeedburnL216Me.symbol.call({from: accounts[4]});

		assert.equal(uint256RzfaGP, BigInt("0"))
		await expect(WeedburnL216Me.disableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnvyIn8Hs = await Weedburn.new({from: accounts[5]});
		const uintWsXW9kv = BigInt("1057")
		const addressTQXzyOP = accounts[2]
		const addressSE6kTLX = accounts[4]
		const uint8xGcRLr4 = await WeedburnvyIn8Hs.decimals.call({from: accounts[3]});
//		const bool0THtXf = await WeedburnvyIn8Hs.transferFrom.call(addressSE6kTLX, addressTQXzyOP, uintWsXW9kv, {from: accounts[5]});
//		await WeedburnvyIn8Hs.enableLimitMode.call({from: accounts[2]});
//		const stringbQeMjMJ = await WeedburnvyIn8Hs.symbol.call({from: accounts[1]});

		assert.equal(uint8xGcRLr4, BigInt("18"))
		await expect(WeedburnvyIn8Hs.transferFrom.call(addressSE6kTLX, addressTQXzyOP, uintWsXW9kv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnKKgDeV = await Weedburn.new({from: accounts[4]});
		const uintpQvgbnS = BigInt("2005")
		const addressokcTEy8 = accounts[1]
		const uintVq2ppCW = BigInt("1433")
		const addressA2LuIbL = accounts[2]
		const addressxxbN5s1 = accounts[1]
		const uintTM2Dpft = BigInt("208")
		const addressvDUqw7c = accounts[0]
		const uintIF2vEcR = BigInt("715")
		const addressExBaTxh = accounts[2]
		const boolbIjXY9H = await WeedburnnKKgDeV.approve.call(addressokcTEy8, uintpQvgbnS, {from: accounts[0]});
//		const boolvq4mh0k = await WeedburnnKKgDeV.transferFrom.call(addressxxbN5s1, addressA2LuIbL, uintVq2ppCW, {from: accounts[1]});
//		const bool6hjwgd = await WeedburnnKKgDeV.increaseAllowance.call(addressvDUqw7c, uintTM2Dpft, {from: accounts[5]});
//		const boolEt5bIrV = await WeedburnnKKgDeV.transfer.call(addressExBaTxh, uintIF2vEcR, {from: accounts[0]});

		assert.equal(boolbIjXY9H, true)
		await expect(WeedburnnKKgDeV.transferFrom.call(addressxxbN5s1, addressA2LuIbL, uintVq2ppCW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnMvlyyL9 = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJvVam9Q = BigInt("382")
		const uint256UwIuErv = await WeedburnMvlyyL9.burn.call(uintJvVam9Q, {from: accounts[2]});
		const uint8Jzz3WBj = await WeedburnMvlyyL9.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});
})