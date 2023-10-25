const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsnH4khl = await UFragments.new({from: accounts[1]});
		const intOkGyjSh = BigInt("1364")
		const int4NP7Oa = BigInt("-80")
		const uintgN1YvIT = BigInt("1608")
		const addressWw1nEpS = accounts[1]
//		const int256yaZmydR = await UFragmentsnH4khl.sub.call(int4NP7Oa, intOkGyjSh, {from: accounts[0]});
//		const boolPDXZX7R = await UFragmentsnH4khl.transfer.call(addressWw1nEpS, uintgN1YvIT, {from: accounts[3]});

		await expect(UFragmentsnH4khl.sub.call(int4NP7Oa, intOkGyjSh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsKhF7mgW = await UFragments.new({from: accounts[0]});
		const addressHdM21Po = "0x0000000000000000000000000000000000000001"
		const addresswS69gzT = accounts[2]
		const intX7f5ooJ = BigInt("44")
		const intcMJ9zHa = BigInt("-166")
//		const address4pzhw9 = await UFragmentsKhF7mgW.initialize.call(addressHdM21Po, {from: accounts[1]});
//		await UFragmentsKhF7mgW.onlyOwner.call({from: accounts[0]});
//		const addressylYuAnZ = await UFragmentsKhF7mgW.initialize.call(addresswS69gzT, {from: accounts[4]});
//		const int256AMX9znJ = await UFragmentsKhF7mgW.div.call(intcMJ9zHa, intX7f5ooJ, {from: accounts[5]});

		await expect(UFragmentsKhF7mgW.initialize.call(addressHdM21Po, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsksQxuRk = await UFragments.new({from: accounts[1]});
		const uintZFTSCxV = BigInt("1578")
		const addressjRSrOXw = "0x0000000000000000000000000000000000000001"
		const addressAWE3wWa = accounts[1]
		const uintYWgrxT5 = BigInt("1253")
		const addressKz6t7MM = accounts[5]
//		const boolDbGgXmE = await UFragmentsksQxuRk.transferFrom.call(addressAWE3wWa, addressjRSrOXw, uintZFTSCxV, {from: accounts[0]});
//		const boolu2Zy1SJ = await UFragmentsksQxuRk.transfer.call(addressKz6t7MM, uintYWgrxT5, {from: accounts[4]});
//		const uint8AQORf5c = await UFragmentsksQxuRk.decimals.call({from: accounts[0]});

		await expect(UFragmentsksQxuRk.transferFrom.call(addressAWE3wWa, addressjRSrOXw, uintZFTSCxV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsGjOjhvo = await UFragments.new({from: accounts[1]});
		const addressHbyO9pL = accounts[1]
		const intVYrHuc5 = BigInt("-390")
		const intJSjfn0R = BigInt("-1224")
		const boolEDaUyp = await UFragmentsGjOjhvo.rebaseTimeInfo.call({from: accounts[5]});
		const addressYbyI0vV = await UFragmentsGjOjhvo.owner.call({from: accounts[4]});
//		await UFragmentsGjOjhvo.initializer.call({from: accounts[3]});
//		const addressTGddKjd = await UFragmentsGjOjhvo.initialize.call(addressHbyO9pL, {from: accounts[0]});
//		const int256dBRE60 = await UFragmentsGjOjhvo.mul.call(intJSjfn0R, intVYrHuc5, {from: accounts[4]});

		assert.equal(addressYbyI0vV, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsGjOjhvo.initializer.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstz34iVf = await UFragments.new({from: accounts[1]});
		const intkHIXhQG = BigInt("697")
		const intpnSGJlW = BigInt("455")
//		const uint256wIhh19L = await UFragmentstz34iVf.calRebase.call({from: accounts[1]});
//		const uint256o9UaXbi = await UFragmentstz34iVf.totalSupply.call({from: accounts[3]});
//		const boolfFnM2Ad = await UFragmentstz34iVf.isOwner.call({from: accounts[2]});
//		const int256XcNOwv = await UFragmentstz34iVf.sub.call(intpnSGJlW, intkHIXhQG, {from: accounts[1]});

		await expect(UFragmentstz34iVf.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnH4khl = await UFragments.new({from: accounts[1]});
		const uintgVALs9E = BigInt("1608")
		const addressLHxPPxV = accounts[2]
//		const boolPDXZX7R = await UFragmentsnH4khl.transfer.call(addressLHxPPxV, uintgVALs9E, {from: accounts[3]});

		await expect(UFragmentsnH4khl.transfer.call(addressLHxPPxV, uintgVALs9E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstz34iVf = await UFragments.new({from: accounts[1]});
		const intD6Ao2jL = BigInt("697")
		const intItw8NeA = BigInt("455")
		const uint256o9UaXbi = await UFragmentstz34iVf.totalSupply.call({from: accounts[3]});
		const boolfFnM2Ad = await UFragmentstz34iVf.isOwner.call({from: accounts[2]});
//		const int256XcNOwv = await UFragmentstz34iVf.sub.call(intItw8NeA, intD6Ao2jL, {from: accounts[1]});

		assert.equal(boolfFnM2Ad, false)
		assert.equal(uint256o9UaXbi, BigInt("0"))
		await expect(UFragmentstz34iVf.sub.call(intItw8NeA, intD6Ao2jL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsK1ZAgz7 = await UFragments.new({from: accounts[1]});
		const int83UxdU = BigInt("-1892")
		const intuNVdEIA = BigInt("-1576")
		const uintgfoxtyD = BigInt("62")
		const addresskEuxMJ9 = accounts[4]
		const intlTnNJKk = BigInt("-401")
		const stringyaty99B = await UFragmentsK1ZAgz7.name.call({from: accounts[3]});
//		const int256hpV8PUr = await UFragmentsK1ZAgz7.mul.call(intuNVdEIA, int83UxdU, {from: accounts[0]});
//		const boolFcxYacq = await UFragmentsK1ZAgz7.approve.call(addresskEuxMJ9, uintgfoxtyD, {from: accounts[1]});
//		const int256N3xF0U = await UFragmentsK1ZAgz7.abs.call(intlTnNJKk, {from: accounts[2]});

		assert.equal(stringyaty99B, "")
		await expect(UFragmentsK1ZAgz7.mul.call(intuNVdEIA, int83UxdU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnH4khl = await UFragments.new({from: accounts[1]});
		const addressWuWLncn = accounts[3]
		const addressr181Nw3 = accounts[2]
		const uintKUSWgWq = BigInt("846")
		const addressl2gJ60 = accounts[2]
		const uintCsn0niL = BigInt("171")
		const addressspjQ3ih = accounts[0]
		const addressEu6BOUh = accounts[0]
		const uint256lqk6Iso = await UFragmentsnH4khl.allowance.call(addressr181Nw3, addressWuWLncn, {from: accounts[1]});
//		const addressePI2jxi = await UFragmentsnH4khl.initRebase.call(addressl2gJ60, uintKUSWgWq, {from: accounts[4]});
//		const boolR4B0mx = await UFragmentsnH4khl.transferFrom.call(addressEu6BOUh, addressspjQ3ih, uintCsn0niL, {from: accounts[5]});

		assert.equal(uint256lqk6Iso, BigInt("0"))
		await expect(UFragmentsnH4khl.initRebase.call(addressl2gJ60, uintKUSWgWq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnH4khl = await UFragments.new({from: accounts[1]});
		const inthbQGLOO = BigInt("1857")
		const intMUFyIud = BigInt("661")
		const uintubPX8sA = BigInt("1353")
		const addressicOL8gQ = accounts[2]
		const stringaaJRv8 = await UFragmentsnH4khl.symbol.call({from: accounts[2]});
//		const int256v4IWm3f = await UFragmentsnH4khl.add.call(intMUFyIud, inthbQGLOO, {from: accounts[2]});
//		const boolPDXZX7R = await UFragmentsnH4khl.transfer.call(addressicOL8gQ, uintubPX8sA, {from: accounts[3]});

		assert.equal(stringaaJRv8, "")
		await expect(UFragmentsnH4khl.add.call(intMUFyIud, inthbQGLOO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnH4khl = await UFragments.new({from: accounts[1]});
		const uintOsBkIPJ = BigInt("1589")
		const addressVL0wye = accounts[2]
		const uintcBxQaly = BigInt("1608")
		const addressNsk2eOE = accounts[3]
		const addressBbsfN2p = accounts[1]
		const addressxoG7CxJ = accounts[5]
		const boolsBqbu2n = await UFragmentsnH4khl.approve.call(addressVL0wye, uintOsBkIPJ, {from: accounts[4]});
//		const boolPDXZX7R = await UFragmentsnH4khl.transfer.call(addressNsk2eOE, uintcBxQaly, {from: accounts[3]});
//		const uint256MWSxSc = await UFragmentsnH4khl.allowance.call(addressxoG7CxJ, addressBbsfN2p, {from: accounts[3]});
//		const uint256lMjB9Yt = await UFragmentsnH4khl.calRebase.call({from: accounts[2]});
//		await UFragmentsnH4khl.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolsBqbu2n, true)
		await expect(UFragmentsnH4khl.transfer.call(addressNsk2eOE, uintcBxQaly, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsSNU4Izl = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const boolCIqIFvz = await UFragmentsSNU4Izl.rebaseTimeInfo.call({from: accounts[3]});
		const boolUNCxGQX = await UFragmentsSNU4Izl.rebaseTimeInfo.call({from: accounts[2]});
		const stringZR1hJhL = await UFragmentsSNU4Izl.symbol.call({from: accounts[4]});
	});

	it('test for UFragments', async () => {
		const UFragmentsnH4khl = await UFragments.new({from: accounts[1]});
		const uintXorltr = BigInt("1608")
		const addressIj502Hn = accounts[2]
		const uint8Eg4asC = await UFragmentsnH4khl.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kK21Pek = await UFragmentsnH4khl.totalSupply.call({from: accounts[3]});
//		const boolPDXZX7R = await UFragmentsnH4khl.transfer.call(addressIj502Hn, uintXorltr, {from: accounts[3]});

		assert.equal(uint256kK21Pek, BigInt("0"))
		assert.equal(uint8Eg4asC, BigInt("0"))
		await expect(UFragmentsnH4khl.transfer.call(addressIj502Hn, uintXorltr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentssyyPq0F = await UFragments.new({from: accounts[5]});
		const uintYBkDWZj = BigInt("42")
		const stringcif360 = "NYb5L1pd3s2vBUjmJHfTfpE24oPjnonfydkCtocYxS3iShF9wBUxzTpulkDI"
		const stringnrywXXl = "fa7Jf47h1s"
		const intnGHUlSC = BigInt("-1934")
		const intlYyBDP0 = BigInt("-1291")
		const intoKNQE5L = BigInt("-368")
		const intkyv05kw = BigInt("-317")
		const stringeU6SVmX = await UFragmentssyyPq0F.initialize.call(stringnrywXXl, stringcif360, uintYBkDWZj, {from: accounts[5]});
//		const int256i2fjdD = await UFragmentssyyPq0F.add.call(intlYyBDP0, intnGHUlSC, {from: accounts[0]});
//		const int256H8Q8F0S = await UFragmentssyyPq0F.mul.call(intkyv05kw, intoKNQE5L, {from: accounts[1]});

		await expect(UFragmentssyyPq0F.add.call(intlYyBDP0, intnGHUlSC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})