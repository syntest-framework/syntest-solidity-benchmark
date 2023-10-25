const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITzc86yw = await RIT.new({from: accounts[5]});
		const uintyRnRUc = BigInt("1972")
		const addressXQg4BDB = accounts[0]
		const boolAUaPbSn = await RITzc86yw.approve.call(addressXQg4BDB, uintyRnRUc, {from: accounts[4]});
		const uint256ioMB0x7 = await RITzc86yw.totalSupply.call({from: accounts[5]});
		const uint8fi0EUeK = await RITzc86yw.decimals.call({from: accounts[0]});
		const uint8IEVPkB = await RITzc86yw.decimals.call({from: accounts[4]});

		assert.equal(boolAUaPbSn, true)
		assert.equal(uint256ioMB0x7, BigInt("500000000000000000000000000"))
		assert.equal(uint8IEVPkB, BigInt("18"))
		assert.equal(uint8fi0EUeK, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITjWbqGgX = await RIT.new({from: accounts[5]});
		const uintyrtbTKz = BigInt("478")
		const uintlyFvDj0 = BigInt("1402")
		const uintzFVNxuv = BigInt("1810")
		const addressPirj0wa = accounts[4]
//		const uint256tazITmL = await RITjWbqGgX._burn.call(uintyrtbTKz, {from: accounts[3]});
//		const uint256qVrsKC = await RITjWbqGgX._burn.call(uintlyFvDj0, {from: accounts[3]});
//		const boolyEdp4y2 = await RITjWbqGgX.increaseAllowance.call(addressPirj0wa, uintzFVNxuv, {from: "0x0000000000000000000000000000000000000001"});
//		const stringpk4bZx = await RITjWbqGgX.symbol.call({from: accounts[4]});
//		const stringn0ozLQg = await RITjWbqGgX.name.call({from: accounts[0]});

		await expect(RITjWbqGgX._burn.call(uintyrtbTKz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITbiBKQlh = await RIT.new({from: accounts[3]});
		const uintnjoH9kI = BigInt("1070")
		const addressZYO5Ju6 = accounts[1]
		const uintqiisjlw = BigInt("1982")
		const addressEa5efJA = accounts[1]
		const uintvSNOrNg = BigInt("1579")
		const addressk9go1Uk = accounts[3]
		const uintGUiqBG0 = BigInt("235")
		const addressZO4xGiP = accounts[3]
		const addressiSw301C = accounts[3]
		const boolHkn9HSz = await RITbiBKQlh.increaseAllowance.call(addressZYO5Ju6, uintnjoH9kI, {from: accounts[0]});
		const booljgfCC7Q = await RITbiBKQlh.increaseAllowance.call(addressEa5efJA, uintqiisjlw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYkIhRNB = await RITbiBKQlh.transfer.call(addressk9go1Uk, uintvSNOrNg, {from: accounts[1]});
//		const boolTjad0X = await RITbiBKQlh.transferFrom.call(addressiSw301C, addressZO4xGiP, uintGUiqBG0, {from: accounts[2]});

		assert.equal(boolHkn9HSz, true)
		assert.equal(booljgfCC7Q, true)
		await expect(RITbiBKQlh.transfer.call(addressk9go1Uk, uintvSNOrNg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITMb8W36 = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttVysmxE = BigInt("1816")
		const addressGhUlor3 = accounts[2]
		const stringQwyrgQp = await RITMb8W36.symbol.call({from: accounts[4]});
		const boolQLX53wa = await RITMb8W36.decreaseAllowance.call(addressGhUlor3, uinttVysmxE, {from: accounts[5]});
		const stringJjxU0Th = await RITMb8W36.symbol.call({from: accounts[1]});
	});

	it('test for RIT', async () => {
		const RITD9NdwK = await RIT.new({from: accounts[1]});
		const uintNwerMfE = BigInt("383")
		const addressFcym9Fh = accounts[3]
		const addressXYx5inX = accounts[1]
		const addresspt4y9ii = "0x0000000000000000000000000000000000000001"
		const uintGmkv5Ik = BigInt("511")
		const addressg5EsLWV = accounts[2]
		const addressl1Ljm2H = accounts[3]
		const address9z4C7b = accounts[2]
		const addressU7HQNUs = accounts[5]
//		const boolc2Anzb6 = await RITD9NdwK.transferFrom.call(addressXYx5inX, addressFcym9Fh, uintNwerMfE, {from: accounts[1]});
//		const uint256A5oOJoI = await RITD9NdwK.balanceOf.call(addresspt4y9ii, {from: accounts[0]});
//		const boolTh9AooO = await RITD9NdwK.transferFrom.call(addressl1Ljm2H, addressg5EsLWV, uintGmkv5Ik, {from: accounts[0]});
//		const uint256NhIpFwY = await RITD9NdwK.balanceOf.call(address9z4C7b, {from: accounts[3]});
//		const uint256FC2a510 = await RITD9NdwK.balanceOf.call(addressU7HQNUs, {from: accounts[3]});

		await expect(RITD9NdwK.transferFrom.call(addressXYx5inX, addressFcym9Fh, uintNwerMfE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITDe42qQw = await RIT.new({from: accounts[4]});
		const uintTOviLt = BigInt("1661")
		const addressBGrSLdv = accounts[0]
		const uintnxhfZNP = BigInt("919")
		const addressRs8aUgE = accounts[4]
		const addressF9452I = accounts[0]
		const uintt7XExob = BigInt("1984")
		const addressSSObb53 = accounts[3]
		const addressr7LFAG = accounts[4]
		const uintJYRxvnP = BigInt("1433")
		const addressM5ntyLq = accounts[2]
//		const boolzU8ePrr = await RITDe42qQw.decreaseAllowance.call(addressBGrSLdv, uintTOviLt, {from: accounts[4]});
//		const boolmJ3ofDH = await RITDe42qQw.transferFrom.call(addressF9452I, addressRs8aUgE, uintnxhfZNP, {from: accounts[4]});
//		const stringXvVSzwi = await RITDe42qQw.name.call({from: accounts[0]});
//		const uint256O9O3wb0 = await RITDe42qQw.totalSupply.call({from: accounts[2]});
//		const boolpSlCa6 = await RITDe42qQw.transferFrom.call(addressr7LFAG, addressSSObb53, uintt7XExob, {from: accounts[0]});
//		const boolhOIXodF = await RITDe42qQw.approve.call(addressM5ntyLq, uintJYRxvnP, {from: accounts[4]});

		await expect(RITDe42qQw.decreaseAllowance.call(addressBGrSLdv, uintTOviLt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITB7K7kO = await RIT.new({from: accounts[2]});
		const uintLQZOrV2 = BigInt("1180")
		const addresscmmvTG2 = accounts[5]
		const uintUG0jqN = BigInt("272")
		const addresscYeza8M = accounts[3]
		const stringqZvti3w = await RITB7K7kO.name.call({from: accounts[1]});
		const stringy3uUyih = await RITB7K7kO.symbol.call({from: accounts[2]});
		const uint256nw2upX4 = await RITB7K7kO.totalSupply.call({from: accounts[0]});
//		const boolEkTz0ae = await RITB7K7kO.decreaseAllowance.call(addresscmmvTG2, uintLQZOrV2, {from: accounts[3]});
//		const boolS1lHU6 = await RITB7K7kO.decreaseAllowance.call(addresscYeza8M, uintUG0jqN, {from: accounts[4]});

		assert.equal(stringqZvti3w, "Real Estate Investment Token")
		assert.equal(stringy3uUyih, "RIT 2.0")
		assert.equal(uint256nw2upX4, BigInt("500000000000000000000000000"))
		await expect(RITB7K7kO.decreaseAllowance.call(addresscmmvTG2, uintLQZOrV2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITmfJFyX = await RIT.new({from: accounts[0]});
		const addressti1oJOC = accounts[5]
		const uinthfxFMyQ = BigInt("1064")
		const addressEjDQXjK = accounts[5]
		const uint256DO8H09H = await RITmfJFyX.balanceOf.call(addressti1oJOC, {from: accounts[0]});
		const uint8eZWgDTx = await RITmfJFyX.decimals.call({from: accounts[4]});
//		const boolzbyCbYC = await RITmfJFyX.transfer.call(addressEjDQXjK, uinthfxFMyQ, {from: accounts[3]});

		assert.equal(uint256DO8H09H, BigInt("0"))
		assert.equal(uint8eZWgDTx, BigInt("18"))
		await expect(RITmfJFyX.transfer.call(addressEjDQXjK, uinthfxFMyQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITHfIz4ku = await RIT.new({from: accounts[2]});
		const addressvXnXaMd = accounts[3]
		const addressc6vTsUw = accounts[4]
		const uinta4XzXj = BigInt("760")
		const addressHISXByW = accounts[1]
		const uint256UZn8Qmg = await RITHfIz4ku.allowance.call(addressc6vTsUw, addressvXnXaMd, {from: accounts[4]});
		const uint8fPQo3c = await RITHfIz4ku.decimals.call({from: accounts[4]});
		const boolzxiCvus = await RITHfIz4ku.approve.call(addressHISXByW, uinta4XzXj, {from: accounts[4]});

		assert.equal(boolzxiCvus, true)
		assert.equal(uint256UZn8Qmg, BigInt("0"))
		assert.equal(uint8fPQo3c, BigInt("18"))
	});
})