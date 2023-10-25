const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinu0GHQFB = await DJCoin.new({from: accounts[0]});
		const uintmmeoO5S = BigInt("1489")
		const addressALkKvY5 = accounts[0]
		const addressbi5MGLq = accounts[0]
		const uintHuHi4XK = BigInt("1000")
		const uinthVQG4oO = BigInt("1763")
		const boolNMv9OE4 = await DJCoinu0GHQFB.transfer.call(addressALkKvY5, uintmmeoO5S, {from: accounts[0]});
//		const addressE1K4Wlm = await DJCoinu0GHQFB.transferOwnership.call(addressbi5MGLq, {from: accounts[2]});
//		const uint256H996lOt = await DJCoinu0GHQFB.burn.call(uinthVQG4oO, uintHuHi4XK, {from: accounts[5]});
//		await DJCoinu0GHQFB.onlyOwner.call({from: accounts[3]});
//		await DJCoinu0GHQFB.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinu0GHQFB.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolNMv9OE4, true)
		await expect(DJCoinu0GHQFB.transferOwnership.call(addressbi5MGLq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinYbamc8 = await DJCoin.new({from: accounts[2]});
		const uintdAQ79Te = BigInt("1953")
		const addressAajszwr = accounts[2]
		const addressqqCY74g = accounts[3]
		const uintbYsK99S = BigInt("1043")
		const addresslzYKGzT = accounts[1]
		const addressrYVdTAA = await DJCoinYbamc8.owner.call({from: accounts[2]});
//		const booloLf16Wo = await DJCoinYbamc8.transferFrom.call(addressqqCY74g, addressAajszwr, uintdAQ79Te, {from: accounts[3]});
//		const uint2562qF8R2 = await DJCoinYbamc8.totalSupply.call({from: accounts[4]});
//		const boolCPpS4zE = await DJCoinYbamc8.changetokensPerBlock.call(uintbYsK99S, {from: accounts[4]});
//		const uint256GDAWIA = await DJCoinYbamc8.totalSupply.call({from: accounts[2]});
//		const addressAuZkmji = await DJCoinYbamc8.validRecipient.call(addresslzYKGzT, {from: accounts[1]});

		assert.equal(addressrYVdTAA, 0xe219111E84d512FCa5Db367a44D69c7FEA7C1359)
		await expect(DJCoinYbamc8.transferFrom.call(addressqqCY74g, addressAajszwr, uintdAQ79Te, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinN7zvrbH = await DJCoin.new({from: accounts[2]});
		const uintvRRyYYq = BigInt("265")
		const addressZOrpXA = accounts[4]
		const uintWhVVw0k = BigInt("1490")
		const addressmiurXYY = accounts[2]
		const addressktRVhOk = accounts[3]
		const boolHg4gnbp = await DJCoinN7zvrbH.approve.call(addressZOrpXA, uintvRRyYYq, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinN7zvrbH.onlyOwner.call({from: accounts[2]});
//		const boolGPbqZh = await DJCoinN7zvrbH.transfer.call(addressmiurXYY, uintWhVVw0k, {from: accounts[3]});
//		const uint256tRMp8XL = await DJCoinN7zvrbH.balanceOf.call(addressktRVhOk, {from: accounts[2]});

		assert.equal(boolHg4gnbp, true)
		await expect(DJCoinN7zvrbH.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinxJzrnv6 = await DJCoin.new({from: accounts[3]});
		const addressfHuQZ3 = accounts[2]
		const uintsjv8D5t = BigInt("1655")
		const addressTBH0Awm = accounts[3]
		const addressmU3uVtD = accounts[2]
		const uint256kJ6AbL = await DJCoinxJzrnv6.balanceOf.call(addressfHuQZ3, {from: accounts[5]});
//		const boolwYDAGHQ = await DJCoinxJzrnv6.transferFrom.call(addressmU3uVtD, addressTBH0Awm, uintsjv8D5t, {from: accounts[2]});

		assert.equal(uint256kJ6AbL, BigInt("0"))
		await expect(DJCoinxJzrnv6.transferFrom.call(addressmU3uVtD, addressTBH0Awm, uintsjv8D5t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnqDs2Va = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyeJ263Y = BigInt("142")
		const uinti6qaeh = BigInt("1856")
		const uint256Kv6oSGu = await DJCoinnqDs2Va.burn.call(uinti6qaeh, uintyeJ263Y, {from: accounts[3]});
		const uint256AXJtmd = await DJCoinnqDs2Va.totalSupply.call({from: accounts[0]});
	});

	it('test for DJCoin', async () => {
		const DJCoinqBiTPJK = await DJCoin.new({from: accounts[0]});
		const uintzLKNlxd = BigInt("570")
		const addressNeYoAqT = accounts[4]
		const addresszJ58Ckq = accounts[1]
		const addressBVVmd32 = accounts[2]
		const address492MJf = accounts[1]
		const addressSMoKPhS = accounts[2]
		const boolELdCZFA = await DJCoinqBiTPJK.increaseAllowance.call(addressNeYoAqT, uintzLKNlxd, {from: accounts[3]});
		const uint256RcGdi5M = await DJCoinqBiTPJK.balanceOf.call(addresszJ58Ckq, {from: accounts[3]});
		const uint256iYydFWG = await DJCoinqBiTPJK.allowance.call(address492MJf, addressBVVmd32, {from: accounts[3]});
		const uint256WCB37c = await DJCoinqBiTPJK.balanceOf.call(addressSMoKPhS, {from: accounts[3]});

		assert.equal(boolELdCZFA, true)
		assert.equal(uint256RcGdi5M, BigInt("0"))
		assert.equal(uint256WCB37c, BigInt("0"))
		assert.equal(uint256iYydFWG, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinxJzrnv6 = await DJCoin.new({from: accounts[3]});
		const addresswdJV0Hi = accounts[3]
		const uintFIu0yRW = BigInt("179")
		const addressDS65Qcj = accounts[4]
		const uintPqQmCJ2 = BigInt("1655")
		const addressbWG9zhZ = accounts[3]
		const addressg47Vgq1 = accounts[2]
		const uint256kJ6AbL = await DJCoinxJzrnv6.balanceOf.call(addresswdJV0Hi, {from: accounts[5]});
		const boolU5k3WD6 = await DJCoinxJzrnv6.decreaseAllowance.call(addressDS65Qcj, uintFIu0yRW, {from: accounts[3]});
//		const boolwYDAGHQ = await DJCoinxJzrnv6.transferFrom.call(addressg47Vgq1, addressbWG9zhZ, uintPqQmCJ2, {from: accounts[2]});

		assert.equal(boolU5k3WD6, true)
		assert.equal(uint256kJ6AbL, BigInt("2100000000000"))
		await expect(DJCoinxJzrnv6.transferFrom.call(addressg47Vgq1, addressbWG9zhZ, uintPqQmCJ2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinu0GHQFB = await DJCoin.new({from: accounts[0]});
		const uintFqHFZaA = BigInt("1489")
		const addressO7q1eRC = accounts[0]
		const addressXokGfRQ = accounts[0]
		const uintosle65M = BigInt("1000")
		const uintSddnLnS = BigInt("1763")
		const boolNMv9OE4 = await DJCoinu0GHQFB.transfer.call(addressO7q1eRC, uintFqHFZaA, {from: accounts[0]});
		const uint256uYUdnVM = await DJCoinu0GHQFB.totalSupply.call({from: accounts[0]});
//		const addressE1K4Wlm = await DJCoinu0GHQFB.transferOwnership.call(addressXokGfRQ, {from: accounts[2]});
//		const uint256H996lOt = await DJCoinu0GHQFB.burn.call(uintSddnLnS, uintosle65M, {from: accounts[5]});
//		await DJCoinu0GHQFB.onlyOwner.call({from: accounts[3]});
//		await DJCoinu0GHQFB.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinu0GHQFB.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolNMv9OE4, true)
		assert.equal(uint256uYUdnVM, BigInt("2100000000000"))
		await expect(DJCoinu0GHQFB.transferOwnership.call(addressXokGfRQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinFtazFs1 = await DJCoin.new({from: accounts[0]});
		const addressPVUNe4M = accounts[1]
		const addressDzapnU8 = accounts[3]
		const uinttNzVhH = BigInt("196")
		const uintfne932L = BigInt("603")
		const uintLI4doyj = BigInt("806")
		const addressvaU7oaN = accounts[2]
		const addressPvGJ7g = "0x0000000000000000000000000000000000000001"
		const uintlJqTTCS = BigInt("755")
		const addressM9Th76 = accounts[0]
		const uint256Oez72R = await DJCoinFtazFs1.allowance.call(addressDzapnU8, addressPVUNe4M, {from: accounts[0]});
		const boolN8pMXP3 = await DJCoinFtazFs1.changetokensPerBlock.call(uinttNzVhH, {from: accounts[3]});
		const uint2567epMpz = await DJCoinFtazFs1.burn.call(uintLI4doyj, uintfne932L, {from: accounts[0]});
		const uint256f6MZgYC = await DJCoinFtazFs1.allowance.call(addressPvGJ7g, addressvaU7oaN, {from: accounts[3]});
		const boollSbwAYs = await DJCoinFtazFs1.approve.call(addressM9Th76, uintlJqTTCS, {from: accounts[2]});

		assert.equal(boolN8pMXP3, true)
		assert.equal(boollSbwAYs, true)
		assert.equal(uint2567epMpz, BigInt("1973370000000"))
		assert.equal(uint256Oez72R, BigInt("0"))
		assert.equal(uint256f6MZgYC, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinR5LnzCT = await DJCoin.new({from: accounts[4]});
		const addressDggn86Y = accounts[4]
		const addressUYBjtGg = accounts[0]
		const addressC1Ut8NL = accounts[2]
		const addressCrWnxu4 = accounts[2]
		const uintsLSeQdx = BigInt("591")
		const addressRE5bSu = "0x0000000000000000000000000000000000000001"
		const addressBvRRjOC = accounts[0]
		const addressXoInSNb = await DJCoinR5LnzCT.transferOwnership.call(addressDggn86Y, {from: accounts[4]});
		const uint256nRLIkZG = await DJCoinR5LnzCT.allowance.call(addressC1Ut8NL, addressUYBjtGg, {from: accounts[2]});
//		const addressSCfLAjC = await DJCoinR5LnzCT.validRecipient.call(addressCrWnxu4, {from: accounts[3]});
//		const boolpbVhsB = await DJCoinR5LnzCT.transferFrom.call(addressBvRRjOC, addressRE5bSu, uintsLSeQdx, {from: accounts[1]});

		assert.equal(uint256nRLIkZG, BigInt("0"))
		await expect(DJCoinR5LnzCT.validRecipient.call(addressCrWnxu4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinSUus2VT = await DJCoin.new({from: accounts[1]});
		const uintgc8HwNq = BigInt("275")
//		await DJCoinSUus2VT.renounceOwnership.call({from: accounts[1]});
//		const uint256aQphjSl = await DJCoinSUus2VT.totalSupply.call({from: accounts[3]});
//		const boolfl4wqPt = await DJCoinSUus2VT.changetokensPerBlock.call(uintgc8HwNq, {from: accounts[0]});

		await expect(DJCoinSUus2VT.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoino3hQu06 = await DJCoin.new({from: accounts[3]});
		const uintWUO8P8q = BigInt("0")
		const addressjENj3m = accounts[6]
		const boolcBk5IpS = await DJCoino3hQu06.transfer.call(addressjENj3m, uintWUO8P8q, {from: accounts[0]});

		assert.equal(boolcBk5IpS, true)
	});
})