const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenF8hIC9 = await MIMOToken.new({from: accounts[4]});
		const uintw5fMvMR = BigInt("635")
		const addresschCWDp1 = accounts[3]
		const uintLFp5DWY = BigInt("1525")
		const addressSotzgMm = accounts[3]
		const addressyqlvE6Y = accounts[3]
		const address5EUF4I = accounts[4]
		const uintDx4wXsR = BigInt("174")
		const addressSudhASR = "0x0000000000000000000000000000000000000001"
		const uintwpkKoF = BigInt("1269")
		const addressD6cnh0B = accounts[1]
		const addresscUBfGbb = accounts[0]
		const boolq5Jn4VV = await MIMOTokenF8hIC9.approve.call(addresschCWDp1, uintw5fMvMR, {from: accounts[4]});
		const uint256Qrc7x15 = await MIMOTokenF8hIC9.setFeeRate.call(uintLFp5DWY, {from: accounts[5]});
		const uintNOfR2MD = await MIMOTokenF8hIC9.allowance.call(addressyqlvE6Y, addressSotzgMm, {from: "0x0000000000000000000000000000000000000001"});
		const uintFvMtRap = await MIMOTokenF8hIC9.balanceOf.call(address5EUF4I, {from: accounts[3]});
		const boolMEpcLld = await MIMOTokenF8hIC9.approve.call(addressSudhASR, uintDx4wXsR, {from: accounts[4]});
//		const boollzu7MVI = await MIMOTokenF8hIC9.transferFrom.call(addresscUBfGbb, addressD6cnh0B, uintwpkKoF, {from: accounts[4]});

		assert.equal(boolMEpcLld, true)
		assert.equal(boolq5Jn4VV, true)
		assert.equal(uintFvMtRap, BigInt("0"))
		assert.equal(uintNOfR2MD, BigInt("0"))
		await expect(MIMOTokenF8hIC9.transferFrom.call(addresscUBfGbb, addressD6cnh0B, uintwpkKoF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenJA6azKA = await MIMOToken.new({from: accounts[4]});
		const uintTWns9Xm = BigInt("1865")
		const addressADD0Ldn = accounts[0]
//		const boolRiB2jx = await MIMOTokenJA6azKA.transfer.call(addressADD0Ldn, uintTWns9Xm, {from: accounts[5]});
//		const uintHeF8ex = await MIMOTokenJA6azKA.totalSupply.call({from: accounts[1]});

		await expect(MIMOTokenJA6azKA.transfer.call(addressADD0Ldn, uintTWns9Xm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenWR1Douh = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintw9tQ9ax = BigInt("1614")
		const uintOQOyPUI = BigInt("237")
		const addressAQS91hd = "0x0000000000000000000000000000000000000001"
		const uintxBRkGPh = BigInt("1625")
		const addressuHjRnc = accounts[1]
		const addressvquqoVf = accounts[4]
		const addressOe8dWBy = accounts[3]
		const uint256Fm7IlEr = await MIMOTokenWR1Douh.setFeeRate.call(uintw9tQ9ax, {from: accounts[3]});
		const boolxWUImgf = await MIMOTokenWR1Douh.approve.call(addressAQS91hd, uintOQOyPUI, {from: accounts[3]});
		const boolQ4uCFDu = await MIMOTokenWR1Douh.transferFrom.call(addressvquqoVf, addressuHjRnc, uintxBRkGPh, {from: accounts[1]});
		const uintch55Bzy = await MIMOTokenWR1Douh.balanceOf.call(addressOe8dWBy, {from: accounts[0]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenWQSVZX4 = await MIMOToken.new({from: accounts[5]});
		const uintHWLKLU = BigInt("1814")
		const addressMkVstv2 = accounts[1]
		const uintC4g8NEr = BigInt("1281")
		const uintAUtZg22 = BigInt("979")
		const addressA9c9LTZ = accounts[2]
		const uintzR2chrs = BigInt("101")
		const addressrJp966l = accounts[2]
		const bool6AbJvp = await MIMOTokenWQSVZX4.approve.call(addressMkVstv2, uintHWLKLU, {from: accounts[0]});
		const uint256f6LVq34 = await MIMOTokenWQSVZX4.getFee.call(uintC4g8NEr, {from: accounts[0]});
		const uintMxVEvrS = await MIMOTokenWQSVZX4.totalSupply.call({from: accounts[5]});
		const booluuegflA = await MIMOTokenWQSVZX4.approve.call(addressA9c9LTZ, uintAUtZg22, {from: accounts[0]});
//		const boollckzuq = await MIMOTokenWQSVZX4.transfer.call(addressrJp966l, uintzR2chrs, {from: accounts[3]});

		assert.equal(bool6AbJvp, true)
		assert.equal(booluuegflA, true)
		assert.equal(uint256f6LVq34, BigInt("50000000000000000"))
		assert.equal(uintMxVEvrS, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenWQSVZX4.transfer.call(addressrJp966l, uintzR2chrs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenJA6azKA = await MIMOToken.new({from: accounts[4]});
		const addressPDjKsMW = accounts[3]
		const uint1rRSVp = BigInt("391")
		const uint4tL08Z = BigInt("1855")
		const addressvoK6od9 = accounts[0]
		const uintAG0DKpp = await MIMOTokenJA6azKA.balanceOf.call(addressPDjKsMW, {from: accounts[1]});
		const uint256o4b7b6 = await MIMOTokenJA6azKA.setMinFee.call(uint1rRSVp, {from: accounts[4]});
//		const boolRiB2jx = await MIMOTokenJA6azKA.transfer.call(addressvoK6od9, uint4tL08Z, {from: accounts[5]});

		assert.equal(uintAG0DKpp, BigInt("0"))
		await expect(MIMOTokenJA6azKA.transfer.call(addressvoK6od9, uint4tL08Z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenJA6azKA = await MIMOToken.new({from: accounts[4]});
		const uintw59xHMM = BigInt("801")
		const addressIiGZVDF = "0x0000000000000000000000000000000000000000"
//		const boolZQDCu0Z = await MIMOTokenJA6azKA.transfer.call(addressIiGZVDF, uintw59xHMM, {from: accounts[4]});

		await expect(MIMOTokenJA6azKA.transfer.call(addressIiGZVDF, uintw59xHMM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})