const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTwxhtU9 = await SALESCONTRACT.new({from: accounts[4]});
		const addressnZR8w7b = accounts[1]
		const boolaKaAGNX = await SALESCONTRACTwxhtU9.tokenSale.call(addressnZR8w7b, {from: accounts[0]});
		await SALESCONTRACTwxhtU9.ff.call({from: accounts[2]});
		await SALESCONTRACTwxhtU9.ff.call({from: accounts[3]});
		await SALESCONTRACTwxhtU9.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTwxhtU9.tokenSale.call(addressnZR8w7b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTwZsdmEd = await SALESCONTRACT.new({from: accounts[2]});
		const uintRFoqsdQ = BigInt("782")
		const addressL3UeQhv = "0x0000000000000000000000000000000000000001"
		const uinta4S5O3S = BigInt("547")
		const addressmjqW8tp = accounts[4]
		await SALESCONTRACTwZsdmEd.ff.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLuQ0SL9 = await SALESCONTRACTwZsdmEd._setSalesPool.call(addressL3UeQhv, uintRFoqsdQ, {from: accounts[0]});
		const addressKUNfgc = await SALESCONTRACTwZsdmEd._setSalesPool.call(addressmjqW8tp, uinta4S5O3S, {from: accounts[5]});

		await expect(SALESCONTRACTwZsdmEd.ff.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTwcqnsW2 = await SALESCONTRACT.new({from: accounts[4]});
		const uintmuDUwKC = BigInt("1100")
		const uintxQDixi = BigInt("1273")
		const addressMrlp6Uc = accounts[4]
		const uintMfk6cxP = await SALESCONTRACTwcqnsW2._setStage.call(uintmuDUwKC, {from: accounts[4]});
		const uintXP92tLH = await SALESCONTRACTwcqnsW2._setStage.call(uintxQDixi, {from: accounts[5]});
		const booly7jeBzd = await SALESCONTRACTwcqnsW2.tokenSale.call(addressMrlp6Uc, {from: accounts[4]});

		await expect(SALESCONTRACTwcqnsW2._setStage.call(uintxQDixi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTUW5WBb9 = await SALESCONTRACT.new({from: accounts[2]});
		const addresslW0rAZi = accounts[5]
		const uintjdtszyS = BigInt("114")
		const addressYqtKAPJ = accounts[2]
		const addresspr13gd = await SALESCONTRACTUW5WBb9.setToken.call(addresslW0rAZi, {from: accounts[2]});
		const addressDMziJZ = await SALESCONTRACTUW5WBb9._setSalesPool.call(addressYqtKAPJ, uintjdtszyS, {from: accounts[0]});

		await expect(SALESCONTRACTUW5WBb9._setSalesPool.call(addressYqtKAPJ, uintjdtszyS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTCq89w1 = await SALESCONTRACT.new({from: accounts[1]});
		const addressEQQisj = accounts[2]
		const address3XKSax = accounts[3]
		const addressgyETjwx = accounts[3]
		const addresspLo5kSK = await SALESCONTRACTCq89w1.setToken.call(addressEQQisj, {from: accounts[1]});
		await SALESCONTRACTCq89w1.clearTokens.call({from: accounts[1]});
		await SALESCONTRACTCq89w1.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
		const boolaBcMbGa = await SALESCONTRACTCq89w1.tokenSale.call(address3XKSax, {from: accounts[2]});
		const addresstewIai2 = await SALESCONTRACTCq89w1.setToken.call(addressgyETjwx, {from: accounts[0]});

		await expect(SALESCONTRACTCq89w1.clearTokens.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpx2ZqPV = await SALESCONTRACT.new({from: accounts[4]});
		const uintwnMRFp = BigInt("1778")
		const uintwsnjTz = BigInt("1926")
		const addressNQUGn3y = accounts[1]
		const uintuzv15ak = BigInt("1824")
		const uintkbqYBgF = BigInt("645")
		const address0mRtTc = accounts[4]
		const addressReEu44 = accounts[1]
		await SALESCONTRACTpx2ZqPV.clearETH.call({from: accounts[4]});
		const uintclfzeqo = await SALESCONTRACTpx2ZqPV._setStage.call(uintwnMRFp, {from: accounts[3]});
		const addressbGOCgn = await SALESCONTRACTpx2ZqPV._setSalesPool.call(addressNQUGn3y, uintwsnjTz, {from: accounts[3]});
		await SALESCONTRACTpx2ZqPV.clearTokens.call({from: accounts[0]});
		const uint5jLsv1 = await SALESCONTRACTpx2ZqPV._setStage.call(uintuzv15ak, {from: accounts[3]});
		const addressqiAVD7l = await SALESCONTRACTpx2ZqPV._setSalesPool.call(address0mRtTc, uintkbqYBgF, {from: accounts[2]});
		const addressGxnX2E2 = await SALESCONTRACTpx2ZqPV.setToken.call(addressReEu44, {from: accounts[3]});
		await SALESCONTRACTpx2ZqPV.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTpx2ZqPV.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTZGf1mo = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJiWfobU = BigInt("270")
		const addressqPE5I7I = accounts[4]
		const uintC4XOCUl = BigInt("1440")
		const addressOL3Sspg = accounts[0]
		const uintwFhn2E = BigInt("1816")
		const address8q4ENU = accounts[1]
		await SALESCONTRACTZGf1mo.ff.call({from: accounts[4]});
		const addressSmFprID = await SALESCONTRACTZGf1mo._setSalesPool.call(addressqPE5I7I, uintJiWfobU, {from: accounts[1]});
		const addressIMtQpjw = await SALESCONTRACTZGf1mo._setSalesPool.call(addressOL3Sspg, uintC4XOCUl, {from: accounts[4]});
		const addressYKoepjS = await SALESCONTRACTZGf1mo._setSalesPool.call(address8q4ENU, uintwFhn2E, {from: accounts[4]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTw8kvP8A = await SALESCONTRACT.new({from: accounts[4]});
		const uintDw2VvFl = BigInt("1802")
		const addressue2WQmR = accounts[3]
		const uintKy0Emym = BigInt("458")
		const addressGgFLAx4 = accounts[0]
		const uintcUFZng = BigInt("960")
		const addressd6IjwAt = accounts[2]
		const addressO16Q7Xo = accounts[3]
		const addresseJH5z6 = await SALESCONTRACTw8kvP8A._setSalesPool.call(addressue2WQmR, uintDw2VvFl, {from: accounts[4]});
		const addressapyEEub = await SALESCONTRACTw8kvP8A._setSalesPool.call(addressGgFLAx4, uintKy0Emym, {from: accounts[1]});
		const uintX4V7wXl = await SALESCONTRACTw8kvP8A._setStage.call(uintcUFZng, {from: accounts[2]});
		const boolOpHhycV = await SALESCONTRACTw8kvP8A.tokenSale.call(addressd6IjwAt, {from: accounts[2]});
		const booluTX5hNU = await SALESCONTRACTw8kvP8A.tokenSale.call(addressO16Q7Xo, {from: accounts[4]});

		await expect(SALESCONTRACTw8kvP8A._setSalesPool.call(addressGgFLAx4, uintKy0Emym, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})