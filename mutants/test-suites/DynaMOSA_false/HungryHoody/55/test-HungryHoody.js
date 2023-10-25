const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyarJjLNP = await HungryHoody.new({from: accounts[5]});
		const addressNntTIEw = accounts[5]
		const addressohSXFOX = accounts[2]
		const uintFUi6rsk = BigInt("1641")
		const uintINxqgBI = BigInt("454")
		const uintUeDqSe = BigInt("708")
		const uintWnnUt9 = BigInt("1362")
		const uinttRLTrAq = BigInt("15")
		const uintr8Gy2S1 = BigInt("680")
		const uintuz2V6S = BigInt("1671")
		const uintKQxBJgq = BigInt("646")
		const uintnO1c0AY = await HungryHoodyarJjLNP.allowance.call(addressohSXFOX, addressNntTIEw, {from: accounts[1]});
		const uintbgCP8UE = await HungryHoodyarJjLNP.safeDiv.call(uintINxqgBI, uintFUi6rsk, {from: accounts[1]});
		const uintNNylAbQ = await HungryHoodyarJjLNP.safeDiv.call(uintWnnUt9, uintUeDqSe, {from: accounts[4]});
		const uintEH1AjCs = await HungryHoodyarJjLNP.safeMul.call(uintr8Gy2S1, uinttRLTrAq, {from: accounts[2]});
		const uinty2YnYIg = await HungryHoodyarJjLNP.safeDiv.call(uintKQxBJgq, uintuz2V6S, {from: accounts[4]});

		assert.equal(uintEH1AjCs, BigInt("10200"))
		assert.equal(uintNNylAbQ, BigInt("1"))
		assert.equal(uintbgCP8UE, BigInt("0"))
		assert.equal(uintnO1c0AY, BigInt("0"))
		assert.equal(uinty2YnYIg, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyNzkGdfI = await HungryHoody.new({from: accounts[0]});
		const uinteBctBRX = BigInt("1536")
		const addressEHiZpw = accounts[4]
		const uintLPatkI6 = BigInt("1913")
		const addressZLl7RWc = accounts[5]
		const addresswNmMs6u = accounts[1]
		const addressjyYEjME = accounts[3]
		const addressFvvK9db = accounts[2]
		const addressdZdC64 = accounts[5]
		const boolNMkt6g = await HungryHoodyNzkGdfI.approve.call(addressEHiZpw, uinteBctBRX, {from: accounts[3]});
//		const boolQJKLFfd = await HungryHoodyNzkGdfI.transferFrom.call(addresswNmMs6u, addressZLl7RWc, uintLPatkI6, {from: accounts[1]});
//		const uintXFuYLlF = await HungryHoodyNzkGdfI.allowance.call(addressFvvK9db, addressjyYEjME, {from: accounts[4]});
//		const uintgjpgNYK = await HungryHoodyNzkGdfI.balanceOf.call(addressdZdC64, {from: accounts[2]});

		assert.equal(boolNMkt6g, true)
		await expect(HungryHoodyNzkGdfI.transferFrom.call(addresswNmMs6u, addressZLl7RWc, uintLPatkI6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyJhEOJYW = await HungryHoody.new({from: accounts[5]});
		const uintTUZDIF = BigInt("1407")
		const addressmZTSWOh = "0x0000000000000000000000000000000000000001"
		const uintbhmkHTu = BigInt("1587")
		const addressRdQSxT = accounts[5]
		const uintB6g98MW = BigInt("374")
		const addressbL42PjR = accounts[0]
		const boolG3fs1mB = await HungryHoodyJhEOJYW.approve.call(addressmZTSWOh, uintTUZDIF, {from: accounts[5]});
		const boolvhXS22u = await HungryHoodyJhEOJYW.approve.call(addressRdQSxT, uintbhmkHTu, {from: accounts[0]});
//		const boolHT5yCP = await HungryHoodyJhEOJYW.transfer.call(addressbL42PjR, uintB6g98MW, {from: accounts[0]});

		assert.equal(boolG3fs1mB, true)
		assert.equal(boolvhXS22u, true)
		await expect(HungryHoodyJhEOJYW.transfer.call(addressbL42PjR, uintB6g98MW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyf6d8Rf8 = await HungryHoody.new({from: accounts[0]});
		const address3NR0PR = accounts[2]
		const addressXSqh8To = accounts[1]
		const addressbisA5Mm = accounts[0]
		const uintZiWelqh = BigInt("202")
		const uintPY0Fwk3 = BigInt("19")
		const uintxj2ksm9 = BigInt("700")
		const uintJPAmhkb = BigInt("610")
		const uintjP5OTQG = BigInt("307")
		const addressLWLbWcL = accounts[4]
		const uintlUxNnRa = await HungryHoodyf6d8Rf8.balanceOf.call(address3NR0PR, {from: accounts[2]});
		const uintDCUDuz = await HungryHoodyf6d8Rf8.allowance.call(addressbisA5Mm, addressXSqh8To, {from: accounts[4]});
		const uintIm1xB1i = await HungryHoodyf6d8Rf8.safeDiv.call(uintPY0Fwk3, uintZiWelqh, {from: accounts[5]});
		const uintSTSpiC0 = await HungryHoodyf6d8Rf8.safeAdd.call(uintJPAmhkb, uintxj2ksm9, {from: accounts[5]});
		const boolpm44paB = await HungryHoodyf6d8Rf8.approve.call(addressLWLbWcL, uintjP5OTQG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolpm44paB, true)
		assert.equal(uintDCUDuz, BigInt("0"))
		assert.equal(uintIm1xB1i, BigInt("0"))
		assert.equal(uintSTSpiC0, BigInt("1310"))
		assert.equal(uintlUxNnRa, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyL9F75BQ = await HungryHoody.new({from: accounts[3]});
		const uintfuURXLt = BigInt("1179")
		const uintAyw6zTG = BigInt("1607")
		const uintvJQ7gtl = BigInt("1578")
		const addressNAT5eRI = accounts[1]
		const uintIIFC869 = BigInt("388")
		const addressyeDUa1A = accounts[1]
		const uintY0UKTmy = await HungryHoodyL9F75BQ.safeDiv.call(uintAyw6zTG, uintfuURXLt, {from: accounts[0]});
		const uintX9bkbGI = await HungryHoodyL9F75BQ.totalSupply.call({from: accounts[4]});
//		const boolD4PWM2v = await HungryHoodyL9F75BQ.transfer.call(addressNAT5eRI, uintvJQ7gtl, {from: accounts[1]});
//		const booljUL0FQM = await HungryHoodyL9F75BQ.approve.call(addressyeDUa1A, uintIIFC869, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintX9bkbGI, BigInt("25000000000000000000"))
		assert.equal(uintY0UKTmy, BigInt("1"))
		await expect(HungryHoodyL9F75BQ.transfer.call(addressNAT5eRI, uintvJQ7gtl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoody1OTjxa = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgzL4ry = BigInt("1101")
		const addresscic7vv0 = accounts[2]
		const addresstpANrTX = accounts[5]
		const uintJyTXSNT = BigInt("460")
		const addressuurbv41 = accounts[2]
		const uintPQfjrEF = BigInt("1861")
		const uintLNSYd2c = BigInt("681")
		const uintntXC78U = BigInt("1980")
		const uintMxyj8q4 = BigInt("763")
		const boolAmr5oNW = await HungryHoody1OTjxa.transferFrom.call(addresstpANrTX, addresscic7vv0, uintgzL4ry, {from: accounts[1]});
		const uintDazVZej = await HungryHoody1OTjxa.totalSupply.call({from: accounts[3]});
		const boolkHjbv9Y = await HungryHoody1OTjxa.transfer.call(addressuurbv41, uintJyTXSNT, {from: accounts[3]});
		const uintLjSx3eQ = await HungryHoody1OTjxa.safeDiv.call(uintLNSYd2c, uintPQfjrEF, {from: "0x0000000000000000000000000000000000000001"});
		const uintbocBIsD = await HungryHoody1OTjxa.safeDiv.call(uintMxyj8q4, uintntXC78U, {from: accounts[4]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyJhEOJYW = await HungryHoody.new({from: accounts[5]});
		const uintQ010Nty = BigInt("1407")
		const addressKX9sju8 = "0x00000000000000000000000000000000000000-1"
		const addresswea668W = accounts[4]
//		const boolG3fs1mB = await HungryHoodyJhEOJYW.approve.call(addressKX9sju8, uintQ010Nty, {from: accounts[5]});
//		const uintygs9NBw = await HungryHoodyJhEOJYW.balanceOf.call(addresswea668W, {from: accounts[3]});

		await expect(HungryHoodyJhEOJYW.approve.call(addressKX9sju8, uintQ010Nty, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})