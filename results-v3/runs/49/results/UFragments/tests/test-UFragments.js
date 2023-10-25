const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsrygOjfi = await UFragments.new({from: accounts[0]});
		const uintLy8POyF = BigInt("1679")
		const addressuLLFELD = accounts[1]
		const addressq57BLw = accounts[2]
		await UFragmentsrygOjfi.renounceOwnership.call({from: accounts[3]});
		await UFragmentsrygOjfi.renounceOwnership.call({from: accounts[1]});
		const boolnhpoEgt = await UFragmentsrygOjfi.transferFrom.call(addressq57BLw, addressuLLFELD, uintLy8POyF, {from: accounts[2]});
		const stringHkUCcGA = await UFragmentsrygOjfi.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsrygOjfi.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsJjlqdAW = await UFragments.new({from: accounts[1]});
		const addressDWxFxyM = accounts[3]
		const uint8kZxPLX = await UFragmentsJjlqdAW.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8Qp0jdJd = await UFragmentsJjlqdAW.decimals.call({from: accounts[5]});
		const addressdQcqFc5 = await UFragmentsJjlqdAW.transferOwnership.call(addressDWxFxyM, {from: accounts[4]});

		assert.equal(uint8Qp0jdJd, BigInt("0"))
		assert.equal(uint8kZxPLX, BigInt("0"))
		await expect(UFragmentsJjlqdAW.transferOwnership.call(addressDWxFxyM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseKwHAWY = await UFragments.new({from: accounts[1]});
		const intMZFpoaq = BigInt("1118")
		const int5nOht3 = BigInt("502")
		const intCjAcsJ0 = BigInt("-1025")
		const intdibP4TC = BigInt("724")
		const int256UPVgLD7 = await UFragmentseKwHAWY.sub.call(int5nOht3, intMZFpoaq, {from: accounts[2]});
		const boolVSXaurp = await UFragmentseKwHAWY.isOwner.call({from: accounts[2]});
		const int256mKOm9hM = await UFragmentseKwHAWY.sub.call(intdibP4TC, intCjAcsJ0, {from: accounts[2]});

		await expect(UFragmentseKwHAWY.sub.call(int5nOht3, intMZFpoaq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressS8gEB3b = accounts[5]
		const intGJWlkKd = BigInt("-1172")
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressS8gEB3b, {from: accounts[0]});
		const addressHZUgTMZ = await UFragmentseBojQa9.owner.call({from: accounts[4]});
		const int256mATlhof = await UFragmentseBojQa9.abs.call(intGJWlkKd, {from: accounts[2]});

		assert.equal(addressHZUgTMZ, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256P1UHZX9, BigInt("0"))
		await expect(UFragmentseBojQa9.abs.call(intGJWlkKd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsb0acHOc = await UFragments.new({from: accounts[4]});
		const addressVj31K3B = accounts[5]
		const uintSEND436 = BigInt("267")
		const addressbikLSb = accounts[2]
		const addresshvGKt28 = accounts[0]
		const uint8ZnzaKM6 = await UFragmentsb0acHOc.decimals.call({from: accounts[3]});
		const addresslhsXb6J = await UFragmentsb0acHOc.initialize.call(addressVj31K3B, {from: accounts[0]});
		const boolTeQCOI5 = await UFragmentsb0acHOc.rebaseTimeInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const boolazpNcOG = await UFragmentsb0acHOc.isOwner.call({from: accounts[1]});
		const boolhWpS1R1 = await UFragmentsb0acHOc.transferFrom.call(addresshvGKt28, addressbikLSb, uintSEND436, {from: accounts[4]});

		assert.equal(uint8ZnzaKM6, BigInt("0"))
		await expect(UFragmentsb0acHOc.initialize.call(addressVj31K3B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxazniKg = await UFragments.new({from: accounts[5]});
		const addressHejMD2b = accounts[2]
		const uintcwCosTU = BigInt("179")
		const addressCvwjUu = accounts[5]
		const addressbqBybXS = accounts[1]
		const uintrw8VRgl = BigInt("506")
		const addressePAdfcE = accounts[3]
		const addressBNTcxc2 = accounts[3]
		const addressM5DFyKb = accounts[1]
		const uint256yNrsOlg = await UFragmentsxazniKg.balanceOf.call(addressHejMD2b, {from: accounts[1]});
		const boolckhqxg1 = await UFragmentsxazniKg.transferFrom.call(addressbqBybXS, addressCvwjUu, uintcwCosTU, {from: accounts[0]});
		const addressQzV1hic = await UFragmentsxazniKg.initRebase.call(addressePAdfcE, uintrw8VRgl, {from: accounts[0]});
		const boolryrK7l7 = await UFragmentsxazniKg.rebaseTimeInfo.call({from: accounts[3]});
		const uint256aVDJnOo = await UFragmentsxazniKg.allowance.call(addressM5DFyKb, addressBNTcxc2, {from: accounts[4]});

		assert.equal(uint256yNrsOlg, BigInt("0"))
		await expect(UFragmentsxazniKg.transferFrom.call(addressbqBybXS, addressCvwjUu, uintcwCosTU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsJjlqdAW = await UFragments.new({from: accounts[1]});
		const addressnsIohR = accounts[3]
		const address93fFSy = accounts[0]
		const addressTNE9zGn = accounts[2]
		const addresswJtQOU2 = accounts[2]
		const addressUbAtOgi = accounts[3]
		const uint256KVRDopn = await UFragmentsJjlqdAW.allowance.call(address93fFSy, addressnsIohR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256U1Y2Wg = await UFragmentsJjlqdAW.allowance.call(addresswJtQOU2, addressTNE9zGn, {from: accounts[3]});
		const uint8kZxPLX = await UFragmentsJjlqdAW.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8Qp0jdJd = await UFragmentsJjlqdAW.decimals.call({from: accounts[5]});
		const addressdQcqFc5 = await UFragmentsJjlqdAW.transferOwnership.call(addressUbAtOgi, {from: accounts[4]});

		assert.equal(uint256KVRDopn, BigInt("0"))
		assert.equal(uint256U1Y2Wg, BigInt("0"))
		assert.equal(uint8Qp0jdJd, BigInt("0"))
		assert.equal(uint8kZxPLX, BigInt("0"))
		await expect(UFragmentsJjlqdAW.transferOwnership.call(addressUbAtOgi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressyVPVhL1 = accounts[6]
		const uintRHrgJb = BigInt("1851")
		const addressTLBiXp = accounts[0]
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressyVPVhL1, {from: accounts[0]});
		const boolouvz44c = await UFragmentseBojQa9.transfer.call(addressTLBiXp, uintRHrgJb, {from: accounts[1]});
		const addressHZUgTMZ = await UFragmentseBojQa9.owner.call({from: accounts[4]});

		assert.equal(uint256P1UHZX9, BigInt("0"))
		await expect(UFragmentseBojQa9.transfer.call(addressTLBiXp, uintRHrgJb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxazniKg = await UFragments.new({from: accounts[5]});
		const addresscEwAe9E = accounts[2]
		const uintlZcQhkl = BigInt("26")
		const stringTqq1GLf = "nwl8tz4SNgzYepHl4ab4zSs4GcKsvDdevcKjjoE5YXBLBcbcIM5UuNOeAT9LhyFQypcRcpIpNB"
		const stringk9kpaVJ = "V3LL3SFSqB7J3XemfmG2k5UOcWXCiLkML8QUV3LEueQbveoYJ"
		const uintSoHQ0nn = BigInt("179")
		const addressiZdXKy = accounts[5]
		const addressf1REI9c = accounts[1]
		const uintfOf9V3U = BigInt("506")
		const addressnq42Dku = accounts[3]
		const addressyGIW6V = accounts[3]
		const addressfjZ2OyM = accounts[1]
		const uint256yNrsOlg = await UFragmentsxazniKg.balanceOf.call(addresscEwAe9E, {from: accounts[1]});
		const addressD7Jr19n = await UFragmentsxazniKg.owner.call({from: accounts[1]});
		const stringtaoWia8 = await UFragmentsxazniKg.initialize.call(stringk9kpaVJ, stringTqq1GLf, uintlZcQhkl, {from: accounts[0]});
		const boolckhqxg1 = await UFragmentsxazniKg.transferFrom.call(addressf1REI9c, addressiZdXKy, uintSoHQ0nn, {from: accounts[0]});
		const addressQzV1hic = await UFragmentsxazniKg.initRebase.call(addressnq42Dku, uintfOf9V3U, {from: accounts[0]});
		const boolryrK7l7 = await UFragmentsxazniKg.rebaseTimeInfo.call({from: accounts[3]});
		const uint256aVDJnOo = await UFragmentsxazniKg.allowance.call(addressfjZ2OyM, addressyGIW6V, {from: accounts[4]});

		assert.equal(addressD7Jr19n, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256yNrsOlg, BigInt("0"))
		await expect(UFragmentsxazniKg.transferFrom.call(addressf1REI9c, addressiZdXKy, uintSoHQ0nn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressbNG5q12 = accounts[7]
		const stringZgKlD1o = await UFragmentseBojQa9.name.call({from: accounts[4]});
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressbNG5q12, {from: accounts[0]});

		assert.equal(stringZgKlD1o, "")
		assert.equal(uint256P1UHZX9, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressZXhLfFZ = accounts[7]
		const uint256GeEk0ZY = await UFragmentseBojQa9.totalSupply.call({from: accounts[4]});
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressZXhLfFZ, {from: accounts[0]});
		const uint8XxMEtX9 = await UFragmentseBojQa9.decimals.call({from: accounts[1]});

		assert.equal(uint256GeEk0ZY, BigInt("0"))
		assert.equal(uint256P1UHZX9, BigInt("0"))
		assert.equal(uint8XxMEtX9, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const uintiYJtdwl = BigInt("1392")
		const addressTmwsSS1 = accounts[1]
		const uintW8dPJzC = BigInt("1402")
		const addresstxTAqOW = accounts[2]
		const addressw6Sm76D = accounts[1]
		const addressS2T40xM = accounts[6]
		const boolALvfZ8r = await UFragmentseBojQa9.approve.call(addressTmwsSS1, uintiYJtdwl, {from: accounts[2]});
		const boolb87MyF = await UFragmentseBojQa9.transferFrom.call(addressw6Sm76D, addresstxTAqOW, uintW8dPJzC, {from: accounts[0]});
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressS2T40xM, {from: accounts[0]});

		assert.equal(boolALvfZ8r, true)
		await expect(UFragmentseBojQa9.transferFrom.call(addressw6Sm76D, addresstxTAqOW, uintW8dPJzC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressUn9nQcP = accounts[7]
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressUn9nQcP, {from: accounts[0]});
		const stringGy8xwjD = await UFragmentseBojQa9.symbol.call({from: accounts[2]});
		const boolJPSRHNf = await UFragmentseBojQa9.isOwner.call({from: accounts[5]});

		assert.equal(boolJPSRHNf, false)
		assert.equal(stringGy8xwjD, "")
		assert.equal(uint256P1UHZX9, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addresstslgDuv = accounts[4]
		const addressFHC0gzS = accounts[3]
		const addressrvJXSKb = accounts[7]
		const boolXoHmJCe = await UFragmentseBojQa9.rebaseTimeInfo.call({from: accounts[0]});
		const addressiA4xn6 = await UFragmentseBojQa9.transferOwnership.call(addresstslgDuv, {from: accounts[4]});
		const uint256RbESAtX = await UFragmentseBojQa9.balanceOf.call(addressFHC0gzS, {from: accounts[2]});
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressrvJXSKb, {from: accounts[0]});

		await expect(UFragmentseBojQa9.transferOwnership.call(addresstslgDuv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsX1NRuSQ = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZax6ihF = BigInt("433")
		const addressuzRCeEA = "0x0000000000000000000000000000000000000001"
		const uintGtvoQp3 = BigInt("1736")
		const addressJ8QUSQH = accounts[1]
		const intNP0bq1B = BigInt("-1111")
		const intRTuRePt = BigInt("1554")
		const boolR6EKVwn = await UFragmentsX1NRuSQ.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolSnSeLAS = await UFragmentsX1NRuSQ.transfer.call(addressuzRCeEA, uintZax6ihF, {from: accounts[3]});
		const boolYbCBBe = await UFragmentsX1NRuSQ.transfer.call(addressJ8QUSQH, uintGtvoQp3, {from: accounts[1]});
		const addressbKFVHZr = await UFragmentsX1NRuSQ.owner.call({from: accounts[2]});
		const int256ID0ySss = await UFragmentsX1NRuSQ.div.call(intRTuRePt, intNP0bq1B, {from: accounts[4]});
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressPGO6YMb = accounts[6]
		const uint256AqLEYw = await UFragmentseBojQa9.calRebase.call({from: accounts[4]});
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressPGO6YMb, {from: accounts[0]});

		await expect(UFragmentseBojQa9.calRebase.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})