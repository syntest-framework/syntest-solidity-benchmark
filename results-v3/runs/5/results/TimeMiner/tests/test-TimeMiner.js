const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerZv0FnRw = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const boolx46q7KK = false
		const uintagkjG7V = BigInt("404")
		const boolzOA3x6E = await TimeMinerZv0FnRw.infoStableSystem.call({from: accounts[4]});
		const boolqvkqjNF = await TimeMinerZv0FnRw.setStableCoinSystem.call(boolx46q7KK, {from: accounts[3]});
		const uint256w4wbc5S = await TimeMinerZv0FnRw.changePreSalePriceIfToHigh.call(uintagkjG7V, {from: accounts[2]});
		const boolkhRJyam = await TimeMinerZv0FnRw.infoStableSystem.call({from: accounts[0]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPrh1D3 = await TimeMiner.new({from: accounts[4]});
		const addressHyZcpw = accounts[2]
		const boolBtgUX16 = false
		const uintCvO3SH1 = BigInt("1775")
		const addressY5pnKk2 = accounts[0]
		const uint256vs2kmu = await TimeMinerPrh1D3.balanceOfTokenCirculation.call(addressHyZcpw, {from: accounts[0]});
		await TimeMinerPrh1D3.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});
		const boolFlf8qgZ = await TimeMinerPrh1D3.setStableCoinSystem.call(boolBtgUX16, {from: accounts[3]});
		const boolbbhMBoO = await TimeMinerPrh1D3.approve.call(addressY5pnKk2, uintCvO3SH1, {from: accounts[1]});

		assert.equal(uint256vs2kmu, BigInt("0"))
		await expect(TimeMinerPrh1D3.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerTpflBTf = await TimeMiner.new({from: accounts[4]});
		const uintfKgA1cf = BigInt("1413")
		const addressvNTVMz = accounts[2]
		const uintwbKUXz = BigInt("1822")
		const uintYly81hw = BigInt("1543")
		const addressOQ30EXh = "0x0000000000000000000000000000000000000001"
		const boolQ9k7yAd = await TimeMinerTpflBTf.transfer.call(addressvNTVMz, uintfKgA1cf, {from: accounts[3]});
		const uintGC0w3Sn = await TimeMinerTpflBTf.preSale.call(uintwbKUXz, {from: accounts[1]});
		const boolfeY5mBW = await TimeMinerTpflBTf.infoStableSystem.call({from: accounts[1]});
		const boolwYhDTiY = await TimeMinerTpflBTf.approve.call(addressOQ30EXh, uintYly81hw, {from: accounts[4]});

		await expect(TimeMinerTpflBTf.transfer.call(addressvNTVMz, uintfKgA1cf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerxw18hLB = await TimeMiner.new({from: accounts[0]});
		const addressMFcfQG4 = accounts[3]
		const uintzaJ7NH = BigInt("1624")
		const boolKBmL0c = await TimeMinerxw18hLB.isWhitelisted.call(addressMFcfQG4, {from: accounts[0]});
		const uint256mNq0e0 = await TimeMinerxw18hLB.changePreSalePriceIfToHigh.call(uintzaJ7NH, {from: accounts[0]});
		const boolQ1ump8W = await TimeMinerxw18hLB.infoStableSystem.call({from: accounts[3]});

		assert.equal(boolKBmL0c, false)
	});

	it('test for TimeMiner', async () => {
		const TimeMinerWJlrdt = await TimeMiner.new({from: accounts[1]});
		const addressOSvmM5 = accounts[2]
		const addresslWVJVLf = accounts[2]
		const addresskhj1dIK = accounts[0]
		const uintNlOZQg7 = BigInt("1681")
		const addressWfg97ei = accounts[2]
		const uint256xUMkPBB = await TimeMinerWJlrdt.allInfoFor.call(addressOSvmM5, {from: accounts[4]});
		const uint256cuW5S9X = await TimeMinerWJlrdt.allInfoFor.call(addresslWVJVLf, {from: accounts[3]});
		const uint256qt5nz8V = await TimeMinerWJlrdt.balanceOf.call(addresskhj1dIK, {from: accounts[0]});
		const boolhrTsvWO = await TimeMinerWJlrdt.transfer.call(addressWfg97ei, uintNlOZQg7, {from: accounts[1]});
		const booljaXOWjG = await TimeMinerWJlrdt.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256O5K58jX = await TimeMinerWJlrdt.totalSupply.call({from: accounts[4]});

		await expect(TimeMinerWJlrdt.allInfoFor.call(addressOSvmM5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerksZ3kjt = await TimeMiner.new({from: accounts[4]});
		const booluboAaZf = true
		const addressoYeyeSj = accounts[5]
		const boolNUkBJSn = false
		const addressV4tc92z = accounts[4]
		const addressNve0jH = await TimeMinerksZ3kjt.whitelist.call(addressoYeyeSj, booluboAaZf, {from: accounts[5]});
		const addressHhAgrty = await TimeMinerksZ3kjt.whitelist.call(addressV4tc92z, boolNUkBJSn, {from: accounts[5]});

		await expect(TimeMinerksZ3kjt.whitelist.call(addressoYeyeSj, booluboAaZf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerTxiqAnL = await TimeMiner.new({from: accounts[2]});
		const address0Pxo8B = accounts[1]
		const uintuz50EUe = BigInt("1971")
		const addressrsL3olc = accounts[1]
		const addressJ9RQ82u = accounts[1]
		const addressfuPlsLg = accounts[3]
		const addressQ6QZp7V = accounts[2]
		const uint2563dKsKd = await TimeMinerTxiqAnL.balanceOf.call(address0Pxo8B, {from: "0x0000000000000000000000000000000000000001"});
		const boolzBXFKpH = await TimeMinerTxiqAnL.transfer.call(addressrsL3olc, uintuz50EUe, {from: accounts[2]});
		const uint256SqSn5rX = await TimeMinerTxiqAnL.allowance.call(addressfuPlsLg, addressJ9RQ82u, {from: accounts[4]});
		const uint256bePFZmK = await TimeMinerTxiqAnL.tokensToClaim.call(addressQ6QZp7V, {from: accounts[2]});

		assert.equal(boolzBXFKpH, true)
		assert.equal(uint2563dKsKd, BigInt("0"))
		assert.equal(uint256SqSn5rX, BigInt("0"))
		assert.equal(uint256bePFZmK, BigInt("12000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerksZ3kjt = await TimeMiner.new({from: accounts[4]});
		const boolhycP16 = true
		const booluboAaZf = true
		const addressW4Bihav = accounts[6]
		const boolNUkBJSn = false
		const addressSTNuH6E = accounts[4]
		const boolyvaVXz = await TimeMinerksZ3kjt.setStableCoinSystem.call(boolhycP16, {from: accounts[3]});
		const addressNve0jH = await TimeMinerksZ3kjt.whitelist.call(addressW4Bihav, booluboAaZf, {from: accounts[5]});
		const addressHhAgrty = await TimeMinerksZ3kjt.whitelist.call(addressSTNuH6E, boolNUkBJSn, {from: accounts[5]});

		await expect(TimeMinerksZ3kjt.setStableCoinSystem.call(boolhycP16, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerksZ3kjt = await TimeMiner.new({from: accounts[4]});
		const uintXrwqHdJ = BigInt("821")
		const uintgpHIkFJ = BigInt("1582")
		const addressH9rQB9Q = accounts[0]
		const uinthArm7f8 = BigInt("1705")
		const booluboAaZf = true
		const addressLNGFAVV = accounts[5]
		const boolNUkBJSn = true
		const addressXep44Lt = accounts[4]
		const uint256Qy8nNSD = await TimeMinerksZ3kjt.setPrizeFromNewAddress.call(uintgpHIkFJ, uintXrwqHdJ, {from: accounts[1]});
		const uint256lkngPbt = await TimeMinerksZ3kjt.tokensToClaim.call(addressH9rQB9Q, {from: accounts[3]});
		const uint256O19MIKf = await TimeMinerksZ3kjt.changePreSalePriceIfToHigh.call(uinthArm7f8, {from: accounts[4]});
		const addressNve0jH = await TimeMinerksZ3kjt.whitelist.call(addressLNGFAVV, booluboAaZf, {from: accounts[5]});
		const addressHhAgrty = await TimeMinerksZ3kjt.whitelist.call(addressXep44Lt, boolNUkBJSn, {from: accounts[5]});

		await expect(TimeMinerksZ3kjt.setPrizeFromNewAddress.call(uintgpHIkFJ, uintXrwqHdJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerksZ3kjt = await TimeMiner.new({from: accounts[4]});
		const uinteHTaIuo = BigInt("8")
		const addressmwpt0MG = accounts[1]
		const addressahOxxvt = accounts[1]
		const uintwrn7X94 = BigInt("1891")
		const addressQvgVyrl = accounts[4]
		const booluboAaZf = true
		const addressCeHxSEU = accounts[5]
		const boolNUkBJSn = false
		const addresse0WFyFe = accounts[4]
		const boolj6Td9mV = await TimeMinerksZ3kjt.transferFrom.call(addressahOxxvt, addressmwpt0MG, uinteHTaIuo, {from: accounts[0]});
		const booliQjyGXs = await TimeMinerksZ3kjt.transfer.call(addressQvgVyrl, uintwrn7X94, {from: accounts[5]});
		const addressNve0jH = await TimeMinerksZ3kjt.whitelist.call(addressCeHxSEU, booluboAaZf, {from: accounts[5]});
		const addressHhAgrty = await TimeMinerksZ3kjt.whitelist.call(addresse0WFyFe, boolNUkBJSn, {from: accounts[5]});

		await expect(TimeMinerksZ3kjt.transferFrom.call(addressahOxxvt, addressmwpt0MG, uinteHTaIuo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerTxiqAnL = await TimeMiner.new({from: accounts[2]});
		const addressEKvz9lo = accounts[1]
		const uintlC3wkE8 = BigInt("1971")
		const addressmkzUhl = accounts[2]
		const addressWbLvmJJ = accounts[2]
		const uint2563dKsKd = await TimeMinerTxiqAnL.balanceOf.call(addressEKvz9lo, {from: "0x0000000000000000000000000000000000000001"});
		const boolzBXFKpH = await TimeMinerTxiqAnL.transfer.call(addressmkzUhl, uintlC3wkE8, {from: accounts[2]});
		const uint256bePFZmK = await TimeMinerTxiqAnL.tokensToClaim.call(addressWbLvmJJ, {from: accounts[2]});

		assert.equal(boolzBXFKpH, true)
		assert.equal(uint2563dKsKd, BigInt("0"))
		assert.equal(uint256bePFZmK, BigInt("12000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerTxiqAnL = await TimeMiner.new({from: accounts[2]});
		const addressOrU5nkS = accounts[1]
		const uinthjDIojF = BigInt("856")
		const addressWM5nGPU = accounts[4]
		const uintSRP35py = BigInt("1971")
		const addressCRCdf7s = accounts[2]
		const addresscluZgao = accounts[2]
		const uint2563dKsKd = await TimeMinerTxiqAnL.balanceOf.call(addressOrU5nkS, {from: "0x0000000000000000000000000000000000000001"});
		const boolZe1ge0 = await TimeMinerTxiqAnL.approve.call(addressWM5nGPU, uinthjDIojF, {from: accounts[0]});
		const boolzBXFKpH = await TimeMinerTxiqAnL.transfer.call(addressCRCdf7s, uintSRP35py, {from: accounts[2]});
		const uint256bePFZmK = await TimeMinerTxiqAnL.tokensToClaim.call(addresscluZgao, {from: accounts[2]});

		assert.equal(boolZe1ge0, true)
		assert.equal(boolzBXFKpH, true)
		assert.equal(uint2563dKsKd, BigInt("0"))
		assert.equal(uint256bePFZmK, BigInt("12000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerksZ3kjt = await TimeMiner.new({from: accounts[4]});
		const uintM49gl1 = BigInt("1094")
		const boolCALi0c = true
		const uintDnT2CeQ = BigInt("8")
		const addressWPdNGha = accounts[2]
		const addressxDcAHeM = accounts[2]
		const uintewe01r5 = await TimeMinerksZ3kjt.preSale.call(uintM49gl1, {from: accounts[0]});
		const booll2hYNwA = await TimeMinerksZ3kjt.setStableCoinSystem.call(boolCALi0c, {from: accounts[4]});
		const boolj6Td9mV = await TimeMinerksZ3kjt.transferFrom.call(addressxDcAHeM, addressWPdNGha, uintDnT2CeQ, {from: accounts[0]});

		await expect(TimeMinerksZ3kjt.preSale.call(uintM49gl1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJN4Ry05 = await TimeMiner.new({from: accounts[5]});
		const addressKHDiZz = accounts[5]
		const boolUJumoCl = true
		const addressAft1Oop = accounts[1]
		const addressBx9vPo5 = accounts[2]
		const uint256zRPMFMB = await TimeMinerJN4Ry05.allInfoFor.call(addressKHDiZz, {from: accounts[1]});
		const addressNp4FLwy = await TimeMinerJN4Ry05.whitelist.call(addressAft1Oop, boolUJumoCl, {from: accounts[5]});
		const uint256K3wEYsA = await TimeMinerJN4Ry05.allInfoFor.call(addressBx9vPo5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerJN4Ry05.allInfoFor.call(addressBx9vPo5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerh34Fi9v = await TimeMiner.new({from: accounts[0]});
		const addressFHr18fG = "0x0000000000000000000000000000000000000001"
		const uintAzMCwB4 = BigInt("1634")
		const uintvEzKJr = BigInt("64")
		const uint256Mt3SlyX = await TimeMinerh34Fi9v.balanceOfTokenCirculation.call(addressFHr18fG, {from: accounts[2]});
		const uint2565yM82R = await TimeMinerh34Fi9v.totalSupply.call({from: accounts[0]});
		const uint256UmLq2L = await TimeMinerh34Fi9v.setPrizeFromNewAddress.call(uintvEzKJr, uintAzMCwB4, {from: accounts[0]});

		assert.equal(uint2565yM82R, BigInt("24000000"))
		assert.equal(uint256Mt3SlyX, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerksZ3kjt = await TimeMiner.new({from: accounts[4]});
		const uintFvEtSXq = BigInt("0")
		const addressDwjIXDc = accounts[2]
		const addressrmt4rUC = accounts[1]
		const boolj6Td9mV = await TimeMinerksZ3kjt.transferFrom.call(addressrmt4rUC, addressDwjIXDc, uintFvEtSXq, {from: accounts[0]});

		await expect(TimeMinerksZ3kjt.transferFrom.call(addressrmt4rUC, addressDwjIXDc, uintFvEtSXq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerTxiqAnL = await TimeMiner.new({from: accounts[2]});
		const addressn5ynIdg = accounts[2]
		const uintgIDm9M = BigInt("1971")
		const addressti2uMGj = accounts[4]
		const booldct3W24 = false
		const uint2568Fue4K = await TimeMinerTxiqAnL.allInfoFor.call(addressn5ynIdg, {from: accounts[3]});
		const boolzBXFKpH = await TimeMinerTxiqAnL.transfer.call(addressti2uMGj, uintgIDm9M, {from: accounts[2]});
		await TimeMinerTxiqAnL.preSaleFinished.call({from: accounts[2]});
		const boolIxgTaiV = await TimeMinerTxiqAnL.setStableCoinSystem.call(booldct3W24, {from: accounts[2]});

		assert.equal(boolzBXFKpH, true)
		await expect(TimeMinerTxiqAnL.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})