const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITNNeDp4D = await RIT.new({from: accounts[3]});
		const uintYAQDxqt = BigInt("1106")
		const addressTINSQTh = accounts[2]
		const uintC7FTg4Z = BigInt("1758")
		const uintofzhDLV = BigInt("1198")
		const addressyG9eNx = accounts[1]
		const addressTaiQZg = accounts[5]
		const uintwqouRS = BigInt("1694")
		const addressbMMbYqJ = accounts[1]
		const addressQ9ydU9m = accounts[1]
		const boolfOGKDo6 = await RITNNeDp4D.increaseAllowance.call(addressTINSQTh, uintYAQDxqt, {from: accounts[3]});
		const uint256utRCri = await RITNNeDp4D._burn.call(uintC7FTg4Z, {from: "0x0000000000000000000000000000000000000001"});
		const boolpoYa6Fn = await RITNNeDp4D.transferFrom.call(addressTaiQZg, addressyG9eNx, uintofzhDLV, {from: "0x0000000000000000000000000000000000000001"});
		const boolsph2mWs = await RITNNeDp4D.approve.call(addressbMMbYqJ, uintwqouRS, {from: accounts[3]});
		const uint256veFCMtZ = await RITNNeDp4D.balanceOf.call(addressQ9ydU9m, {from: accounts[1]});

		assert.equal(boolfOGKDo6, true)
		await expect(RITNNeDp4D._burn.call(uintC7FTg4Z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITT6LaJiW = await RIT.new({from: accounts[2]});
		const addressWDbkXhW = accounts[2]
		const addressOLOFPPZ = accounts[3]
		const uint256WQUXWS1 = await RITT6LaJiW.allowance.call(addressOLOFPPZ, addressWDbkXhW, {from: accounts[5]});
		const uint8nL00nak = await RITT6LaJiW.decimals.call({from: accounts[1]});

		assert.equal(uint256WQUXWS1, BigInt("0"))
		assert.equal(uint8nL00nak, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RIThEEfAtR = await RIT.new({from: accounts[1]});
		const uint256llWgsqR = await RIThEEfAtR.totalSupply.call({from: accounts[2]});
		const uint8cWRAdR = await RIThEEfAtR.decimals.call({from: accounts[2]});
		const stringPv2Hghu = await RIThEEfAtR.symbol.call({from: accounts[5]});
		const stringvo9YNKd = await RIThEEfAtR.symbol.call({from: accounts[0]});

		assert.equal(stringPv2Hghu, "RIT 2.0")
		assert.equal(stringvo9YNKd, "RIT 2.0")
		assert.equal(uint256llWgsqR, BigInt("500000000000000000000000000"))
		assert.equal(uint8cWRAdR, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITnjP5Jp3 = await RIT.new({from: accounts[0]});
		const uintHHk05rn = BigInt("1606")
		const addresscyOsdtq = accounts[2]
		const uintT109NVm = BigInt("1617")
		const addressULkOme5 = accounts[5]
		const uintDbIPFJk = BigInt("1625")
		const addressCpcZp1W = accounts[4]
		const addresswjb5o0 = accounts[0]
		const uintfNlBdqu = BigInt("706")
		const addressUSQaY7U = accounts[3]
		const addressjhBN5E1 = accounts[2]
		const boolAJrouy = await RITnjP5Jp3.transfer.call(addresscyOsdtq, uintHHk05rn, {from: accounts[0]});
		const boolT1dYnpD = await RITnjP5Jp3.approve.call(addressULkOme5, uintT109NVm, {from: accounts[4]});
		const boolK0frpb0 = await RITnjP5Jp3.transferFrom.call(addresswjb5o0, addressCpcZp1W, uintDbIPFJk, {from: accounts[2]});
		const boolDr6B04S = await RITnjP5Jp3.decreaseAllowance.call(addressUSQaY7U, uintfNlBdqu, {from: accounts[1]});
		const stringOBa8GD = await RITnjP5Jp3.symbol.call({from: accounts[3]});
		const uint256RU5sIBy = await RITnjP5Jp3.balanceOf.call(addressjhBN5E1, {from: accounts[3]});

		await expect(RITnjP5Jp3.transfer.call(addresscyOsdtq, uintHHk05rn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITTC0F1pn = await RIT.new({from: accounts[0]});
		const uint8alpUh = BigInt("1020")
		const addresspe60LDm = accounts[1]
		const addressd6HfFx3 = "0x0000000000000000000000000000000000000001"
		const stringueRTbwj = await RITTC0F1pn.symbol.call({from: accounts[1]});
		const stringReXJhG9 = await RITTC0F1pn.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolSqBVwas = await RITTC0F1pn.transferFrom.call(addressd6HfFx3, addresspe60LDm, uint8alpUh, {from: accounts[3]});

		assert.equal(stringReXJhG9, "RIT 2.0")
		assert.equal(stringueRTbwj, "RIT 2.0")
		await expect(RITTC0F1pn.transferFrom.call(addressd6HfFx3, addresspe60LDm, uint8alpUh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZFMcV6T = await RIT.new({from: accounts[3]});
		const addressNPd9Vfz = accounts[4]
		const uintraKbubL = BigInt("403")
		const addressIIBhss5 = accounts[2]
		const uintjEI1m1E = BigInt("612")
		const addressVvJNazR = accounts[3]
		const uint256c7HofJ = await RITZFMcV6T.balanceOf.call(addressNPd9Vfz, {from: accounts[2]});
		const boolAqwLvJK = await RITZFMcV6T.transfer.call(addressIIBhss5, uintraKbubL, {from: accounts[0]});
		const boolNSgrn9 = await RITZFMcV6T.increaseAllowance.call(addressVvJNazR, uintjEI1m1E, {from: "0x0000000000000000000000000000000000000001"});
		const stringHQ95ucN = await RITZFMcV6T.name.call({from: accounts[2]});

		assert.equal(uint256c7HofJ, BigInt("0"))
		await expect(RITZFMcV6T.transfer.call(addressIIBhss5, uintraKbubL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITT6LaJiW = await RIT.new({from: accounts[2]});
		const addresswSdhG3 = accounts[2]
		const addressixABGWj = accounts[3]
		const uintYbnjf0G = BigInt("1346")
		const addresskO6qPnN = accounts[5]
		const uint256WQUXWS1 = await RITT6LaJiW.allowance.call(addressixABGWj, addresswSdhG3, {from: accounts[5]});
		const boolPNIEVCN = await RITT6LaJiW.approve.call(addresskO6qPnN, uintYbnjf0G, {from: accounts[3]});
		const uint8nL00nak = await RITT6LaJiW.decimals.call({from: accounts[1]});
		const uint256MzLeLb = await RITT6LaJiW.totalSupply.call({from: accounts[1]});

		assert.equal(boolPNIEVCN, true)
		assert.equal(uint256MzLeLb, BigInt("500000000000000000000000000"))
		assert.equal(uint256WQUXWS1, BigInt("0"))
		assert.equal(uint8nL00nak, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITK4LCzJI = await RIT.new({from: accounts[1]});
		const addressDjmjTRL = accounts[0]
		const addressiKLhZQ4 = accounts[2]
		const stringIaw6Tfs = await RITK4LCzJI.symbol.call({from: accounts[5]});
		const uint256dv2Fn4o = await RITK4LCzJI.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringi8wkoDD = await RITK4LCzJI.name.call({from: accounts[3]});
		const uint256SNT9DXP = await RITK4LCzJI.allowance.call(addressiKLhZQ4, addressDjmjTRL, {from: "0x0000000000000000000000000000000000000001"});
		const uint8jORYiEF = await RITK4LCzJI.decimals.call({from: accounts[2]});

		assert.equal(stringIaw6Tfs, "RIT 2.0")
		assert.equal(stringi8wkoDD, "Real Estate Investment Token")
		assert.equal(uint256SNT9DXP, BigInt("0"))
		assert.equal(uint256dv2Fn4o, BigInt("500000000000000000000000000"))
		assert.equal(uint8jORYiEF, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITkGdHhB = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNVm6soS = BigInt("249")
		const addresss9BnbTR = accounts[0]
		const address1TTuk9 = accounts[5]
		const addressTYaIkNA = accounts[0]
		const uintMWaagj7 = BigInt("1840")
		const addressD4UtYyM = accounts[2]
		const addressSG5WrCE = accounts[0]
		const uint3gT3ex = BigInt("326")
		const addressdIYmBz = accounts[3]
		const addressBTOtuLr = accounts[0]
		const boolDQVvP4G = await RITkGdHhB.increaseAllowance.call(addresss9BnbTR, uintNVm6soS, {from: accounts[4]});
		const uint256iCvVUuk = await RITkGdHhB.allowance.call(addressTYaIkNA, address1TTuk9, {from: accounts[2]});
		const booldGKsD20 = await RITkGdHhB.transferFrom.call(addressSG5WrCE, addressD4UtYyM, uintMWaagj7, {from: accounts[0]});
		const boolcJ55o5X = await RITkGdHhB.transferFrom.call(addressBTOtuLr, addressdIYmBz, uint3gT3ex, {from: accounts[1]});
		const uint8H62xMUw = await RITkGdHhB.decimals.call({from: accounts[5]});
		const stringVh17tSm = await RITkGdHhB.name.call({from: accounts[3]});
	});

	it('test for RIT', async () => {
		const RITgIAIkZ7 = await RIT.new({from: accounts[0]});
		const uintQPD6biK = BigInt("1270")
		const addressL6jLDMk = accounts[1]
		const addresstKPK2v = accounts[2]
		const addresse8NFAa = accounts[2]
		const uintOnRGp4C = BigInt("879")
		const addressQJkhph = accounts[1]
		const addressQa6McyP = accounts[2]
		const boolBMYWbyS = await RITgIAIkZ7.decreaseAllowance.call(addressL6jLDMk, uintQPD6biK, {from: accounts[0]});
		const uint256TRtYLuy = await RITgIAIkZ7.allowance.call(addresse8NFAa, addresstKPK2v, {from: accounts[1]});
		const stringUwzjyhr = await RITgIAIkZ7.symbol.call({from: accounts[0]});
		const boolheorGqX = await RITgIAIkZ7.transferFrom.call(addressQa6McyP, addressQJkhph, uintOnRGp4C, {from: accounts[1]});
		const uint8AZLXEb = await RITgIAIkZ7.decimals.call({from: accounts[1]});

		await expect(RITgIAIkZ7.decreaseAllowance.call(addressL6jLDMk, uintQPD6biK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})