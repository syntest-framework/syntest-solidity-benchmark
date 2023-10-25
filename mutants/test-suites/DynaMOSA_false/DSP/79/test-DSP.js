const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const addressTc7yXfS = accounts[4]
		const uintcVHyqWo = BigInt("1889")
		const addressAEPRNEn = accounts[3]
		const addressRvAYqGk = accounts[5]
		const boolyQWb34 = await DSPDQXaZ2y.isPauser.call(addressTc7yXfS, {from: accounts[4]});
//		const boolrVun2DJ = await DSPDQXaZ2y.transferFrom.call(addressRvAYqGk, addressAEPRNEn, uintcVHyqWo, {from: accounts[2]});

		assert.equal(boolyQWb34, false)
		await expect(DSPDQXaZ2y.transferFrom.call(addressRvAYqGk, addressAEPRNEn, uintcVHyqWo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringXYttL3 = "qo89fw4VBcRmYJtcH8nVtRIUczlYEOQiqD5KVPNgX"
		const stringokqmVqT = "lYN7judRBzXh310782ieF5JN"
		const uintcpgBx0 = BigInt("151")
		const DSP2CT7ks = await DSP.new(stringXYttL3, stringokqmVqT, uintcpgBx0, {from: accounts[1]});
		const addressDKgy1R1 = accounts[0]
		const addressqSYQvrt = accounts[4]
		const uintEZs5Lhl = BigInt("1432")
		const addressrj5nFFb = accounts[3]
		const addressR2iOu1N = accounts[4]
		const uint256M0LlZk1 = await DSP2CT7ks.balanceOf.call(addressDKgy1R1, {from: accounts[1]});
		const addressaiilMEB = await DSP2CT7ks.transferOwnership.call(addressqSYQvrt, {from: accounts[4]});
		await DSP2CT7ks.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolA5bQoI = await DSP2CT7ks.transferFrom.call(addressR2iOu1N, addressrj5nFFb, uintEZs5Lhl, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPvdxUFme = await DSP.new({from: accounts[4]});
		const addresshJApn7K = accounts[5]
		const uintB9M22ja = BigInt("1976")
		const addressmStRVNO = "0x0000000000000000000000000000000000000001"
		const uint256N040iiY = await DSPvdxUFme.totalSupply.call({from: accounts[4]});
//		const boolIVi4HS0 = await DSPvdxUFme.freezeAccount.call(addresshJApn7K, {from: accounts[0]});
//		const booldzbjwu5 = await DSPvdxUFme.unlock.call(addressmStRVNO, uintB9M22ja, {from: accounts[5]});

		assert.equal(uint256N040iiY, BigInt("100000000000000000000000000000"))
		await expect(DSPvdxUFme.freezeAccount.call(addresshJApn7K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPeocGoZ = await DSP.new({from: accounts[5]});
		const uintu2lPcPH = BigInt("913")
		const addressnPn2xhm = accounts[4]
		const addressrGiN3om = accounts[3]
		const uintlpWWPv5 = BigInt("1532")
		const addressMmZfktV = accounts[4]
		const uintFkWOJBz = BigInt("1532")
		const addressBRt2ApC = accounts[1]
		const addressMCtMTgT = accounts[1]
		const addressLzlCC8U = accounts[2]
		const addressZ29XAC = "0x0000000000000000000000000000000000000001"
		const uintp2uKyaf = BigInt("625")
		const addresswIN4wGk = accounts[1]
		const addressJp68BY = accounts[1]
//		const booljZk1CNy = await DSPeocGoZ.transfer.call(addressnPn2xhm, uintu2lPcPH, {from: accounts[2]});
//		const addressNhaz3o = await DSPeocGoZ.upgradeTo.call(addressrGiN3om, {from: accounts[2]});
//		const boollFowrVN = await DSPeocGoZ.transfer.call(addressMmZfktV, uintlpWWPv5, {from: accounts[4]});
//		const boolbqsRTIS = await DSPeocGoZ.transferFrom.call(addressMCtMTgT, addressBRt2ApC, uintFkWOJBz, {from: accounts[0]});
//		const uint256QK0HPn8 = await DSPeocGoZ.allowance.call(addressZ29XAC, addressLzlCC8U, {from: accounts[4]});
//		const boolqoev52a = await DSPeocGoZ.transferFrom.call(addressJp68BY, addresswIN4wGk, uintp2uKyaf, {from: accounts[4]});

		await expect(DSPeocGoZ.transfer.call(addressnPn2xhm, uintu2lPcPH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPQlmWWzn = await DSP.new({from: accounts[1]});
		const uintXUYcZqZ = BigInt("235")
		const uintVMvcxMe = BigInt("1431")
		const addressqAMYL16 = accounts[0]
//		await DSPQlmWWzn.renouncePauser.call({from: accounts[1]});
//		await DSPQlmWWzn.f.call({from: accounts[2]});
//		const boolnpOG4Xz = await DSPQlmWWzn.lock.call(addressqAMYL16, uintVMvcxMe, uintXUYcZqZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPQlmWWzn.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPy9EdlnT = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVCfwFgx = accounts[1]
		const uintnIlSuDs = BigInt("1668")
		const addressuTxDkVj = accounts[0]
		const uinthToMsgP = BigInt("1228")
		const addressE3tgrdA = accounts[5]
		const stringJuSAVK7 = await DSPy9EdlnT.name.call({from: accounts[2]});
		await DSPy9EdlnT.whenPaused.call({from: accounts[1]});
		const addressGcx5WvH = await DSPy9EdlnT.notFrozen.call(addressVCfwFgx, {from: accounts[0]});
		const boolABkCm4D = await DSPy9EdlnT.mint.call(addressuTxDkVj, uintnIlSuDs, {from: accounts[4]});
		const boolKDPzsbK = await DSPy9EdlnT.transfer.call(addressE3tgrdA, uinthToMsgP, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const uintt8Y7kAF = BigInt("1880")
		const addressB5NSbwQ = "0x0000000000000000000000000000000000000001"
		const addressI6s4os = accounts[0]
		const addressGqFR1yo = accounts[4]
		const uintPIejwBC = BigInt("1889")
		const addressG6RFHOs = accounts[4]
		const addressu3LnkaD = accounts[5]
		const uint8PqggQ2t = await DSPDQXaZ2y.decimals.call({from: accounts[0]});
//		const boolAS26cuB = await DSPDQXaZ2y.transferFrom.call(addressI6s4os, addressB5NSbwQ, uintt8Y7kAF, {from: accounts[0]});
//		const boolyQWb34 = await DSPDQXaZ2y.isPauser.call(addressGqFR1yo, {from: accounts[4]});
//		const boolrVun2DJ = await DSPDQXaZ2y.transferFrom.call(addressu3LnkaD, addressG6RFHOs, uintPIejwBC, {from: accounts[2]});

		assert.equal(uint8PqggQ2t, BigInt("18"))
		await expect(DSPDQXaZ2y.transferFrom.call(addressI6s4os, addressB5NSbwQ, uintt8Y7kAF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPvdxUFme = await DSP.new({from: accounts[4]});
		const addressuBzCJWf = accounts[5]
		const uintsOvMCbO = BigInt("1976")
		const addressslH9Xeu = "0x0000000000000000000000000000000000000001"
		const uint256N040iiY = await DSPvdxUFme.totalSupply.call({from: accounts[4]});
		const stringSJJIwT = await DSPvdxUFme.name.call({from: accounts[2]});
//		const boolIVi4HS0 = await DSPvdxUFme.freezeAccount.call(addressuBzCJWf, {from: accounts[0]});
//		const booldzbjwu5 = await DSPvdxUFme.unlock.call(addressslH9Xeu, uintsOvMCbO, {from: accounts[5]});

		assert.equal(stringSJJIwT, "DSP")
		assert.equal(uint256N040iiY, BigInt("100000000000000000000000000000"))
		await expect(DSPvdxUFme.freezeAccount.call(addressuBzCJWf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPvdxUFme = await DSP.new({from: accounts[4]});
		const uintygCkasD = BigInt("563")
		const addresss1NioS6 = accounts[3]
		const uintcabNdat = BigInt("1912")
		const addressgA3yJU = accounts[4]
		const addresscznvoYv = accounts[5]
		const uintmoouvhE = BigInt("1976")
		const addresseHjQHtz = "0x0000000000000000000000000000000000000002"
		const uint256N040iiY = await DSPvdxUFme.totalSupply.call({from: accounts[4]});
		const boolvA1Dg3D = await DSPvdxUFme.mint.call(addresss1NioS6, uintygCkasD, {from: accounts[4]});
		const boolV22kbyJ = await DSPvdxUFme.transfer.call(addressgA3yJU, uintcabNdat, {from: accounts[4]});
//		const boolIVi4HS0 = await DSPvdxUFme.freezeAccount.call(addresscznvoYv, {from: accounts[0]});
//		const booldzbjwu5 = await DSPvdxUFme.unlock.call(addresseHjQHtz, uintmoouvhE, {from: accounts[5]});

		assert.equal(boolV22kbyJ, true)
		assert.equal(boolvA1Dg3D, true)
		assert.equal(uint256N040iiY, BigInt("100000000000000000000000000000"))
		await expect(DSPvdxUFme.freezeAccount.call(addresscznvoYv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const addressT4rRIiB = accounts[5]
		const uinte6V1rlS = BigInt("1157")
		const addressNnYsqBJ = accounts[2]
//		await DSPDQXaZ2y.onlyPauser.call({from: accounts[1]});
//		const boolyQWb34 = await DSPDQXaZ2y.isPauser.call(addressT4rRIiB, {from: accounts[4]});
//		const boolyEHWux = await DSPDQXaZ2y.mint.call(addressNnYsqBJ, uinte6V1rlS, {from: accounts[2]});

		await expect(DSPDQXaZ2y.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const uintDDQw7Ot = BigInt("238")
		const addresssd2XB2a = accounts[1]
		const addressyPD45GE = accounts[4]
		const uintgAXsLUl = BigInt("1889")
		const addressOSo9F8d = accounts[3]
		const addressisrt0uI = accounts[6]
		const addressqwbsqzB = accounts[1]
		const boolNfGa6wd = await DSPDQXaZ2y.paused.call({from: accounts[0]});
//		await DSPDQXaZ2y.whenNotPaused.call({from: accounts[2]});
//		const boolO0epkXH = await DSPDQXaZ2y.decreaseAllowance.call(addresssd2XB2a, uintDDQw7Ot, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyQWb34 = await DSPDQXaZ2y.isPauser.call(addressyPD45GE, {from: accounts[4]});
//		const boolrVun2DJ = await DSPDQXaZ2y.transferFrom.call(addressisrt0uI, addressOSo9F8d, uintgAXsLUl, {from: accounts[2]});
//		const uint256GLEgDwt = await DSPDQXaZ2y.balanceOf.call(addressqwbsqzB, {from: accounts[0]});

		assert.equal(boolNfGa6wd, false)
		await expect(DSPDQXaZ2y.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const addressuUuPKck = accounts[2]
		const addressh1vFGFF = accounts[4]
		const uintUpUX0q4 = BigInt("1880")
		const addressKyWYdr2 = "0x0000000000000000000000000000000000000001"
		const addressq7FRR1I = accounts[0]
		const addressJBVGqvM = accounts[5]
		const uintHc8WFi = BigInt("1889")
		const addressbb169nr = accounts[4]
		const addressqEwlrk = accounts[5]
//		const boolhqrIHg2 = await DSPDQXaZ2y.unfreezeAccount.call(addressuUuPKck, {from: accounts[0]});
//		const uint8PqggQ2t = await DSPDQXaZ2y.decimals.call({from: accounts[0]});
//		const boolbdvKNyd = await DSPDQXaZ2y.isPauser.call(addressh1vFGFF, {from: accounts[5]});
//		const boolAS26cuB = await DSPDQXaZ2y.transferFrom.call(addressq7FRR1I, addressKyWYdr2, uintUpUX0q4, {from: accounts[0]});
//		const boolyQWb34 = await DSPDQXaZ2y.isPauser.call(addressJBVGqvM, {from: accounts[4]});
//		const boolrVun2DJ = await DSPDQXaZ2y.transferFrom.call(addressqEwlrk, addressbb169nr, uintHc8WFi, {from: accounts[2]});

		await expect(DSPDQXaZ2y.unfreezeAccount.call(addressuUuPKck, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const uintISjRsIl = BigInt("1880")
		const addressESK4dkp = "0x0000000000000000000000000000000000000001"
		const addressWg5F71V = accounts[0]
		const addressvcaOS8i = accounts[5]
		const uintrvk7UqC = BigInt("1889")
		const addresseaMDXL = accounts[4]
		const addressFecf9lp = accounts[5]
		const uint8PqggQ2t = await DSPDQXaZ2y.decimals.call({from: accounts[0]});
		const stringKNRkQd = await DSPDQXaZ2y.symbol.call({from: accounts[0]});
//		const boolAS26cuB = await DSPDQXaZ2y.transferFrom.call(addressWg5F71V, addressESK4dkp, uintISjRsIl, {from: accounts[0]});
//		const boolyQWb34 = await DSPDQXaZ2y.isPauser.call(addressvcaOS8i, {from: accounts[4]});
//		const boolrVun2DJ = await DSPDQXaZ2y.transferFrom.call(addressFecf9lp, addresseaMDXL, uintrvk7UqC, {from: accounts[2]});

		assert.equal(stringKNRkQd, "DSP")
		assert.equal(uint8PqggQ2t, BigInt("18"))
		await expect(DSPDQXaZ2y.transferFrom.call(addressWg5F71V, addressESK4dkp, uintISjRsIl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const addressS7BNHCJ = accounts[2]
		const uintgw1GOsa = BigInt("524")
		const addresszyGgaaa = "0x0000000000000000000000000000000000000001"
		const addressrYWp5k9 = accounts[4]
		const addressnxWLEUX = accounts[5]
		const addressw9cgeFf = await DSPDQXaZ2y.upgradeTo.call(addressS7BNHCJ, {from: accounts[0]});
//		const boolgYMehER = await DSPDQXaZ2y.transferFrom.call(addressrYWp5k9, addresszyGgaaa, uintgw1GOsa, {from: accounts[5]});
//		const boolyQWb34 = await DSPDQXaZ2y.isPauser.call(addressnxWLEUX, {from: accounts[4]});

		await expect(DSPDQXaZ2y.transferFrom.call(addressrYWp5k9, addresszyGgaaa, uintgw1GOsa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const addressrl1YBld = accounts[4]
		const addressXYcTEGx = accounts[2]
		const addressNWJsOTH = accounts[2]
		const uintQeMOGMm = BigInt("524")
		const addressWvd2M82 = "0x0000000000000000000000000000000000000001"
		const addressZ43yZvy = accounts[4]
		const addressUdIXSk1 = accounts[5]
		const uint256KEc0vvP = await DSPDQXaZ2y.balanceOf.call(addressrl1YBld, {from: accounts[4]});
		const addressw9cgeFf = await DSPDQXaZ2y.upgradeTo.call(addressXYcTEGx, {from: accounts[0]});
//		const boolavXrk4K = await DSPDQXaZ2y.unfreezeAccount.call(addressNWJsOTH, {from: accounts[0]});
//		const boolgYMehER = await DSPDQXaZ2y.transferFrom.call(addressZ43yZvy, addressWvd2M82, uintQeMOGMm, {from: accounts[5]});
//		const boolyQWb34 = await DSPDQXaZ2y.isPauser.call(addressUdIXSk1, {from: accounts[4]});

		assert.equal(uint256KEc0vvP, BigInt("0"))
		await expect(DSPDQXaZ2y.unfreezeAccount.call(addressNWJsOTH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPvdxUFme = await DSP.new({from: accounts[4]});
		const addressq8uRRYP = accounts[3]
		const address1u6PYe = accounts[0]
		const addressOA5IYcd = accounts[4]
		const uintneQDq6 = BigInt("1912")
		const addressIGwiD53 = accounts[4]
		const uinth53hHbH = BigInt("1976")
		const addressZ8LiZ3K = "0x0000000000000000000000000000000000000002"
		const uint256N040iiY = await DSPvdxUFme.totalSupply.call({from: accounts[4]});
		const uint256qfLWfj5 = await DSPvdxUFme.balanceOf.call(addressq8uRRYP, {from: accounts[5]});
		const uint256nx2i9ts = await DSPvdxUFme.allowance.call(addressOA5IYcd, address1u6PYe, {from: accounts[1]});
		const boolV22kbyJ = await DSPvdxUFme.transfer.call(addressIGwiD53, uintneQDq6, {from: accounts[4]});
//		const booldzbjwu5 = await DSPvdxUFme.unlock.call(addressZ8LiZ3K, uinth53hHbH, {from: accounts[5]});

		assert.equal(boolV22kbyJ, true)
		assert.equal(uint256N040iiY, BigInt("100000000000000000000000000000"))
		assert.equal(uint256nx2i9ts, BigInt("0"))
		assert.equal(uint256qfLWfj5, BigInt("0"))
		await expect(DSPvdxUFme.unlock.call(addressZ8LiZ3K, uinth53hHbH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const uintCqTSyAd = BigInt("1439")
		const addressLa3l1s = accounts[4]
		const addressPauAKBS = accounts[0]
		const uintzb9HcbI = BigInt("1889")
		const addresscohjVOx = accounts[4]
		const addressc2YdOQx = accounts[5]
//		const boolIgCAjqz = await DSPDQXaZ2y.decreaseAllowance.call(addressLa3l1s, uintCqTSyAd, {from: accounts[4]});
//		const uint256QcW0V3f = await DSPDQXaZ2y.balanceOf.call(addressPauAKBS, {from: accounts[4]});
//		const boolrVun2DJ = await DSPDQXaZ2y.transferFrom.call(addressc2YdOQx, addresscohjVOx, uintzb9HcbI, {from: accounts[2]});

		await expect(DSPDQXaZ2y.decreaseAllowance.call(addressLa3l1s, uintCqTSyAd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPvUnQgCL = await DSP.new({from: accounts[1]});
		const uintGkQ9rpF = BigInt("904")
		const addressyRiQ4J8 = accounts[0]
		const addressYNmZ7aA = accounts[2]
		const uintXFPCbmP = BigInt("1806")
		const addressg8zd3TV = accounts[0]
		const addressl4A0GzJ = accounts[2]
		const uintg4pUhL = BigInt("841")
		const addressfWUpW72 = accounts[1]
		const boolOCrf18W = await DSPvUnQgCL.increaseAllowance.call(addressyRiQ4J8, uintGkQ9rpF, {from: accounts[4]});
		const uint256e9aZvR6 = await DSPvUnQgCL.balanceOf.call(addressYNmZ7aA, {from: accounts[2]});
//		const booltt3I36Z = await DSPvUnQgCL.transferFrom.call(addressl4A0GzJ, addressg8zd3TV, uintXFPCbmP, {from: accounts[0]});
//		await DSPvUnQgCL.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolyHp0xk6 = await DSPvUnQgCL.transfer.call(addressfWUpW72, uintg4pUhL, {from: accounts[0]});

		assert.equal(boolOCrf18W, true)
		assert.equal(uint256e9aZvR6, BigInt("0"))
		await expect(DSPvUnQgCL.transferFrom.call(addressl4A0GzJ, addressg8zd3TV, uintXFPCbmP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhylQo51 = await DSP.new({from: accounts[5]});
		const addressGWm8zAt = accounts[4]
		const addresssWlfcFT = accounts[4]
		const addressKEtAAWe = await DSPhylQo51.transferOwnership.call(addressGWm8zAt, {from: accounts[5]});
		const uint256p2yPT8H = await DSPhylQo51.balanceOf.call(addresssWlfcFT, {from: accounts[3]});

		assert.equal(uint256p2yPT8H, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const addressF0cvEY5 = accounts[0]
		const uintd6y9eC7 = BigInt("2041")
		const addressBNM178e = accounts[3]
		const uintT4TGeyD = BigInt("1337")
		const addressZlFclFQ = accounts[2]
		const bool0i2gZo = await DSPDQXaZ2y.isOwner.call(addressF0cvEY5, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTb1axDT = await DSPDQXaZ2y.decreaseAllowance.call(addressBNM178e, uintd6y9eC7, {from: accounts[1]});
//		const boolRsvPKdQ = await DSPDQXaZ2y.transfer.call(addressZlFclFQ, uintT4TGeyD, {from: accounts[2]});

		assert.equal(bool0i2gZo, true)
		await expect(DSPDQXaZ2y.decreaseAllowance.call(addressBNM178e, uintd6y9eC7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const uintvwdOiYH = BigInt("1327")
		const addressKz6KzLc = accounts[1]
//		await DSPDQXaZ2y.pause.call({from: accounts[0]});
//		const boolRsvPKdQ = await DSPDQXaZ2y.transfer.call(addressKz6KzLc, uintvwdOiYH, {from: accounts[2]});

		await expect(DSPDQXaZ2y.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const addressKLNeQmw = accounts[0]
		const addressiZxJfAP = accounts[3]
		const addressSxiHbC2 = accounts[1]
		const uintMkLALTm = BigInt("1889")
		const addressug6Zcb = accounts[3]
		const addressABcZX1X = accounts[6]
		const uint256RHdeJwb = await DSPDQXaZ2y.balanceOf.call(addressKLNeQmw, {from: accounts[2]});
		const boolsVD2cB8 = await DSPDQXaZ2y.isPauser.call(addressiZxJfAP, {from: accounts[2]});
		const addressbqqDOZg = await DSPDQXaZ2y.addPauser.call(addressSxiHbC2, {from: accounts[0]});
//		const boolrVun2DJ = await DSPDQXaZ2y.transferFrom.call(addressABcZX1X, addressug6Zcb, uintMkLALTm, {from: accounts[2]});

		assert.equal(boolsVD2cB8, false)
		assert.equal(uint256RHdeJwb, BigInt("100000000000000000000000000000"))
		await expect(DSPDQXaZ2y.transferFrom.call(addressABcZX1X, addressug6Zcb, uintMkLALTm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPvdxUFme = await DSP.new({from: accounts[4]});
		const addressTefZiCa = accounts[3]
		const uintfS9GqzS = BigInt("671")
		const uintCtqvhD0 = BigInt("1453")
		const addressYdmPGh3 = accounts[4]
		const uintDmMqhQz = BigInt("1912")
		const addressCHx8J9L = accounts[5]
		const uintBPkwXeF = BigInt("1976")
		const addressbeySOhJ = "0x0000000000000000000000000000000000000002"
		const addressFSqNuyd = accounts[1]
		const uint256N040iiY = await DSPvdxUFme.totalSupply.call({from: accounts[4]});
		const uint256qfLWfj5 = await DSPvdxUFme.balanceOf.call(addressTefZiCa, {from: accounts[5]});
		const boolJjwb4Nd = await DSPvdxUFme.lock.call(addressYdmPGh3, uintCtqvhD0, uintfS9GqzS, {from: accounts[4]});
		const boolV22kbyJ = await DSPvdxUFme.transfer.call(addressCHx8J9L, uintDmMqhQz, {from: accounts[4]});
//		const booldzbjwu5 = await DSPvdxUFme.unlock.call(addressbeySOhJ, uintBPkwXeF, {from: accounts[5]});
//		const addressCFQSz3k = await DSPvdxUFme.transferOwnership.call(addressFSqNuyd, {from: accounts[4]});

		assert.equal(boolJjwb4Nd, true)
		assert.equal(boolV22kbyJ, true)
		assert.equal(uint256N040iiY, BigInt("100000000000000000000000000000"))
		assert.equal(uint256qfLWfj5, BigInt("0"))
		await expect(DSPvdxUFme.unlock.call(addressbeySOhJ, uintBPkwXeF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDQXaZ2y = await DSP.new({from: accounts[0]});
		const address66RC9L = accounts[2]
		const uintbHnbG4e = BigInt("1889")
		const addressmFvqZCY = accounts[4]
		const addressnT7t4YU = accounts[5]
//		const addressbORKkFp = await DSPDQXaZ2y.removePauser.call(address66RC9L, {from: accounts[0]});
//		const uint8EcPnhq9 = await DSPDQXaZ2y.decimals.call({from: accounts[4]});
//		const boolrVun2DJ = await DSPDQXaZ2y.transferFrom.call(addressnT7t4YU, addressmFvqZCY, uintbHnbG4e, {from: accounts[2]});

		await expect(DSPDQXaZ2y.removePauser.call(address66RC9L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})