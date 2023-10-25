const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsdNd5R6D = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressoDUxOsp = accounts[2]
		const addressTBMhTYB = await UFragmentsdNd5R6D.initialize.call(addressoDUxOsp, {from: accounts[3]});
		await UFragmentsdNd5R6D.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressFoBwGWy = await UFragmentsdNd5R6D.owner.call({from: accounts[4]});
	});

	it('test for UFragments', async () => {
		const UFragmentsQKyccY = await UFragments.new({from: accounts[4]});
//		const uint256JlFNjcl = await UFragmentsQKyccY.calRebase.call({from: accounts[2]});
//		const addressORwp3i = await UFragmentsQKyccY.owner.call({from: accounts[4]});

		await expect(UFragmentsQKyccY.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsruggRmP = await UFragments.new({from: accounts[4]});
		const uintVQ9Zfko = BigInt("1649")
		const addressdusCMii = accounts[5]
//		await UFragmentsruggRmP.onlyOwner.call({from: accounts[4]});
//		const boolyFLQQQ2 = await UFragmentsruggRmP.transfer.call(addressdusCMii, uintVQ9Zfko, {from: accounts[2]});

		await expect(UFragmentsruggRmP.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsVjRAI2j = await UFragments.new({from: accounts[2]});
		const intpDBvHX = BigInt("-228")
		const intvekg4w7 = BigInt("803")
		const addresso9scmfq = accounts[2]
		const addresscyoXWqs = accounts[4]
		const uintJvqBH20 = BigInt("551")
		const addresseyY2iO5 = accounts[3]
		const uint8BfibCij = await UFragmentsVjRAI2j.decimals.call({from: accounts[0]});
//		const int256agbbVDl = await UFragmentsVjRAI2j.add.call(intvekg4w7, intpDBvHX, {from: accounts[5]});
//		const uint256feauTY = await UFragmentsVjRAI2j.allowance.call(addresscyoXWqs, addresso9scmfq, {from: accounts[3]});
//		const boolm0F2DwV = await UFragmentsVjRAI2j.transfer.call(addresseyY2iO5, uintJvqBH20, {from: accounts[1]});
//		const uint256PtrDzeQ = await UFragmentsVjRAI2j.totalSupply.call({from: accounts[1]});
//		await UFragmentsVjRAI2j.onlyOwner.call({from: accounts[0]});

		assert.equal(uint8BfibCij, BigInt("0"))
		await expect(UFragmentsVjRAI2j.add.call(intvekg4w7, intpDBvHX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsMWFMRRW = await UFragments.new({from: accounts[4]});
		const addresspyjyAC = accounts[2]
//		const addressbzp4IjC = await UFragmentsMWFMRRW.initialize.call(addresspyjyAC, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8ATBDaTh = await UFragmentsMWFMRRW.decimals.call({from: accounts[0]});
//		const stringxvmRovW = await UFragmentsMWFMRRW.name.call({from: accounts[4]});
//		const boolxHWsYZc = await UFragmentsMWFMRRW.isOwner.call({from: accounts[4]});
//		const uint256OZy1iX3 = await UFragmentsMWFMRRW.calRebase.call({from: accounts[4]});

		await expect(UFragmentsMWFMRRW.initialize.call(addresspyjyAC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentscoR59Mz = await UFragments.new({from: accounts[4]});
		const intM47WkNd = BigInt("1454")
		const intgOHW3Nv = BigInt("263")
		const addresswAghdcb = accounts[0]
		const uint256BVElsj = await UFragmentscoR59Mz.totalSupply.call({from: accounts[2]});
//		const int256iuVZRlM = await UFragmentscoR59Mz.mul.call(intgOHW3Nv, intM47WkNd, {from: accounts[2]});
//		const addressvN5Wetu = await UFragmentscoR59Mz.initialize.call(addresswAghdcb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256BVElsj, BigInt("0"))
		await expect(UFragmentscoR59Mz.mul.call(intgOHW3Nv, intM47WkNd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsZUXTjaw = await UFragments.new({from: accounts[0]});
		const uintsO9G0w = BigInt("1932")
		const addressIYHjCn = accounts[4]
		const addressYdjJtOo = accounts[0]
//		const addresswywgHBN = await UFragmentsZUXTjaw.initRebase.call(addressIYHjCn, uintsO9G0w, {from: accounts[5]});
//		await UFragmentsZUXTjaw.onlyOwner.call({from: accounts[4]});
//		const addressZsGxZX1 = await UFragmentsZUXTjaw.transferOwnership.call(addressYdjJtOo, {from: accounts[3]});

		await expect(UFragmentsZUXTjaw.initRebase.call(addressIYHjCn, uintsO9G0w, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQKyccY = await UFragments.new({from: accounts[4]});
		const uintVpSylAJ = BigInt("158")
		const addressCC8uuW7 = accounts[1]
//		const boolG0M3y8n = await UFragmentsQKyccY.transfer.call(addressCC8uuW7, uintVpSylAJ, {from: accounts[5]});
//		const uint256JlFNjcl = await UFragmentsQKyccY.calRebase.call({from: accounts[2]});
//		const addressORwp3i = await UFragmentsQKyccY.owner.call({from: accounts[4]});

		await expect(UFragmentsQKyccY.transfer.call(addressCC8uuW7, uintVpSylAJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQKyccY = await UFragments.new({from: accounts[4]});
		const uintwiP5581 = BigInt("1604")
		const addressfrvXaP = accounts[2]
		const boolTgCNAb = await UFragmentsQKyccY.approve.call(addressfrvXaP, uintwiP5581, {from: accounts[2]});
//		const uint256JlFNjcl = await UFragmentsQKyccY.calRebase.call({from: accounts[2]});
//		const addressORwp3i = await UFragmentsQKyccY.owner.call({from: accounts[4]});

		assert.equal(boolTgCNAb, true)
		await expect(UFragmentsQKyccY.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQKyccY = await UFragments.new({from: accounts[4]});
		const intfeJgIhq = BigInt("-644")
		const intsaEuywk = BigInt("-1")
		const stringewEn0tV = await UFragmentsQKyccY.name.call({from: accounts[0]});
		const addressORwp3i = await UFragmentsQKyccY.owner.call({from: accounts[4]});
//		const int256eW4XrAQ = await UFragmentsQKyccY.sub.call(intsaEuywk, intfeJgIhq, {from: accounts[3]});

		assert.equal(addressORwp3i, 0x0000000000000000000000000000000000000000)
		assert.equal(stringewEn0tV, "")
		await expect(UFragmentsQKyccY.sub.call(intsaEuywk, intfeJgIhq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQKyccY = await UFragments.new({from: accounts[4]});
		const uintat9hVDa = BigInt("748")
		const addresscgPo3wQ = accounts[3]
		const addressiRmwTVa = accounts[1]
		const intYpJms1F = BigInt("-1792")
		const intgOnzVtN = BigInt("-1937")
//		const boolTCyRo3X = await UFragmentsQKyccY.transferFrom.call(addressiRmwTVa, addresscgPo3wQ, uintat9hVDa, {from: accounts[1]});
//		await UFragmentsQKyccY.renounceOwnership.call({from: accounts[0]});
//		const int256iXCZnlI = await UFragmentsQKyccY.div.call(intgOnzVtN, intYpJms1F, {from: accounts[3]});
//		const uint256JlFNjcl = await UFragmentsQKyccY.calRebase.call({from: accounts[2]});

		await expect(UFragmentsQKyccY.transferFrom.call(addressiRmwTVa, addresscgPo3wQ, uintat9hVDa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQKyccY = await UFragments.new({from: accounts[4]});
		const uintw2Y6lqq = BigInt("40")
		const stringtpRv6nh = "sR7IbbCO3kGBDhxs4MRTxj5II6irotDYlCda"
		const stringW2TPJ1J = "MryCHdxpWq3uMh8SrQsfXwWSP6FG0tcJjYAerSfjlwtaO8VCuKWdMdAv8jO3CoTTEQCKwsINmsifE0w23yq4HhbQ8UF"
		const uintUZj7euz = BigInt("158")
		const addressTQ9leGk = accounts[1]
		const stringZ2Hlh12 = await UFragmentsQKyccY.initialize.call(stringW2TPJ1J, stringtpRv6nh, uintw2Y6lqq, {from: accounts[1]});
//		const boolG0M3y8n = await UFragmentsQKyccY.transfer.call(addressTQ9leGk, uintUZj7euz, {from: accounts[5]});
//		const uint256JlFNjcl = await UFragmentsQKyccY.calRebase.call({from: accounts[2]});
//		const addressORwp3i = await UFragmentsQKyccY.owner.call({from: accounts[4]});
//		const boolEIZh8pk = await UFragmentsQKyccY.isOwner.call({from: accounts[2]});

		await expect(UFragmentsQKyccY.transfer.call(addressTQ9leGk, uintUZj7euz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQKyccY = await UFragments.new({from: accounts[4]});
		const addressT4lzFMK = accounts[2]
		const addressuqaYiTf = accounts[4]
		const uintRqtvK1 = BigInt("484")
		const addressnDSd8fY = accounts[1]
		const uint256x531nD3 = await UFragmentsQKyccY.allowance.call(addressuqaYiTf, addressT4lzFMK, {from: accounts[2]});
//		const boolG0M3y8n = await UFragmentsQKyccY.transfer.call(addressnDSd8fY, uintRqtvK1, {from: accounts[5]});
//		const uint256JlFNjcl = await UFragmentsQKyccY.calRebase.call({from: accounts[2]});
//		const addressORwp3i = await UFragmentsQKyccY.owner.call({from: accounts[4]});

		assert.equal(uint256x531nD3, BigInt("0"))
		await expect(UFragmentsQKyccY.transfer.call(addressnDSd8fY, uintRqtvK1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsuDAvnDo = await UFragments.new({from: accounts[4]});
		const uintjNA0Qd = BigInt("6")
		const stringH1PghJL = "lYCc7kKOMPCvTXXgc9qXYsBzeVBDyzyPxX5BdHBLHWvU1oq"
		const string5jqNwK = "Mtdk6NFuzmyS6ss7wssCVH8tBnMoPzLMiVdE9fAAF8ENIig9PSGMCXmo8o1umkdys08x9fuDfpJdXQlcUS"
		const intgf9Qd8z = BigInt("1783")
		const intGQY1wSF = BigInt("611")
		const stringMMws3Mx = await UFragmentsuDAvnDo.symbol.call({from: accounts[1]});
		const stringq844dtz = await UFragmentsuDAvnDo.initialize.call(string5jqNwK, stringH1PghJL, uintjNA0Qd, {from: accounts[3]});
//		const uint256FAdPMkT = await UFragmentsuDAvnDo.calRebase.call({from: accounts[1]});
//		const int256UDf0ZxF = await UFragmentsuDAvnDo.div.call(intGQY1wSF, intgf9Qd8z, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256peilLtp = await UFragmentsuDAvnDo.calRebase.call({from: accounts[2]});

		assert.equal(stringMMws3Mx, "")
		await expect(UFragmentsuDAvnDo.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQKyccY = await UFragments.new({from: accounts[4]});
		const booldbvtJK7 = await UFragmentsQKyccY.rebaseTimeInfo.call({from: accounts[4]});
//		const uint256JlFNjcl = await UFragmentsQKyccY.calRebase.call({from: accounts[2]});
//		const addressORwp3i = await UFragmentsQKyccY.owner.call({from: accounts[4]});

		await expect(UFragmentsQKyccY.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})