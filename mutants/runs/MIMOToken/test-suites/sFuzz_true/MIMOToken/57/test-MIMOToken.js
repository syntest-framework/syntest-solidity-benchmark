const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenzlGd72 = await MIMOToken.new({from: accounts[3]});
		const uintmSd4Sfz = BigInt("580")
		const addressUrktb72 = accounts[1]
		const addressmnEqpu = accounts[5]
		const uintLwpjTxX = BigInt("1483")
		const uint256kWkzGyL = await MIMOTokenzlGd72.setFeeRate.call(uintmSd4Sfz, {from: accounts[2]});
		const uintuY1u82F = await MIMOTokenzlGd72.allowance.call(addressmnEqpu, addressUrktb72, {from: accounts[5]});
		const uint256UtGoBR8 = await MIMOTokenzlGd72.setFeeRate.call(uintLwpjTxX, {from: accounts[3]});

		assert.equal(uintuY1u82F, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenBFHUKAJ = await MIMOToken.new({from: accounts[0]});
		const addresszZFikRx = accounts[3]
		const uintdJiBGYp = BigInt("1737")
		const address9yyOLi = accounts[1]
		const addressC8Ifv1f = accounts[1]
		const addressIv5hrJH = accounts[3]
		const addressyyI2jX = accounts[3]
		const addressp8vUJ9Q = accounts[3]
		const uint5ipbNM = BigInt("1717")
		const addressyQM9jr8 = accounts[3]
		const uintvOuonW6 = await MIMOTokenBFHUKAJ.balanceOf.call(addresszZFikRx, {from: accounts[1]});
		const boolRaZodzp = await MIMOTokenBFHUKAJ.transfer.call(address9yyOLi, uintdJiBGYp, {from: accounts[4]});
		const uintdeXrwV6 = await MIMOTokenBFHUKAJ.allowance.call(addressIv5hrJH, addressC8Ifv1f, {from: accounts[2]});
		const uintYKifWg7 = await MIMOTokenBFHUKAJ.allowance.call(addressp8vUJ9Q, addressyyI2jX, {from: accounts[2]});
		const boolt4OKZgJ = await MIMOTokenBFHUKAJ.transfer.call(addressyQM9jr8, uint5ipbNM, {from: accounts[0]});

		assert.equal(uintvOuonW6, BigInt("0"))
		await expect(MIMOTokenBFHUKAJ.transfer.call(address9yyOLi, uintdJiBGYp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokensVwX218 = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnDujmpy = accounts[4]
		const uintR1Q8JJH = BigInt("1508")
		const addressYUdyeaX = accounts[2]
		const uintWYsSiy1 = BigInt("1861")
		const addressJfTcGuM = accounts[0]
		const addressX7BauUl = accounts[2]
		const addressvfJTP5 = accounts[0]
		const addressDdPkivZ = accounts[2]
		const uintik1yJT4 = await MIMOTokensVwX218.balanceOf.call(addressnDujmpy, {from: "0x0000000000000000000000000000000000000001"});
		const booluUTiQGo = await MIMOTokensVwX218.transfer.call(addressYUdyeaX, uintR1Q8JJH, {from: accounts[4]});
		const uint256MUSiJNN = await MIMOTokensVwX218.setMinFee.call(uintWYsSiy1, {from: accounts[1]});
		const uintEmYQpgz = await MIMOTokensVwX218.allowance.call(addressX7BauUl, addressJfTcGuM, {from: accounts[3]});
		const uintZ70Dllv = await MIMOTokensVwX218.allowance.call(addressDdPkivZ, addressvfJTP5, {from: accounts[0]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenoGBAStQ = await MIMOToken.new({from: accounts[2]});
		const uintlALjMuW = BigInt("1068")
		const addressV7f95jX = accounts[1]
		const addressnAYvhyy = accounts[2]
		const boolqeBCJIu = await MIMOTokenoGBAStQ.transferFrom.call(addressnAYvhyy, addressV7f95jX, uintlALjMuW, {from: accounts[4]});
		const uintEiMzCc = await MIMOTokenoGBAStQ.totalSupply.call({from: accounts[5]});

		await expect(MIMOTokenoGBAStQ.transferFrom.call(addressnAYvhyy, addressV7f95jX, uintlALjMuW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokeng9vJj3a = await MIMOToken.new({from: accounts[5]});
		const uintTHbRoWY = BigInt("1585")
		const addresszZ4jRjv = accounts[2]
		const uintMNNcT0n = BigInt("1463")
		const addresst9dNzoH = accounts[3]
		const uintHXZkkZ0 = BigInt("607")
		const addressjJqsQ2 = accounts[4]
		const uintqM5w0dI = BigInt("29")
		const addressA6IZ7VG = accounts[4]
		const addresssa3tas7 = accounts[0]
		const boolDbT4S3b = await MIMOTokeng9vJj3a.approve.call(addresszZ4jRjv, uintTHbRoWY, {from: accounts[0]});
		const boolmXN7LrD = await MIMOTokeng9vJj3a.approve.call(addresst9dNzoH, uintMNNcT0n, {from: accounts[1]});
		const uintLeonBFy = await MIMOTokeng9vJj3a.totalSupply.call({from: accounts[1]});
		const boolxTgiYkQ = await MIMOTokeng9vJj3a.approve.call(addressjJqsQ2, uintHXZkkZ0, {from: accounts[5]});
		const boolPE67lL = await MIMOTokeng9vJj3a.transferFrom.call(addresssa3tas7, addressA6IZ7VG, uintqM5w0dI, {from: accounts[4]});
		const uintGsXc5AV = await MIMOTokeng9vJj3a.totalSupply.call({from: accounts[4]});

		assert.equal(boolDbT4S3b, true)
		assert.equal(boolmXN7LrD, true)
		assert.equal(boolxTgiYkQ, true)
		assert.equal(uintLeonBFy, BigInt("16000000000000000000000000"))
		await expect(MIMOTokeng9vJj3a.transferFrom.call(addresssa3tas7, addressA6IZ7VG, uintqM5w0dI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenkepfC4P = await MIMOToken.new({from: accounts[2]});
		const uinth1Sl9bd = BigInt("1752")
		const uintXAur9Tu = BigInt("408")
		const addressopjWkBS = accounts[5]
		const uintFYHVJRe = BigInt("306")
		const addressu1VQfuF = accounts[2]
		const uint256fXIngeW = await MIMOTokenkepfC4P.setMinFee.call(uinth1Sl9bd, {from: accounts[4]});
		const uint256ZvqlOmx = await MIMOTokenkepfC4P.getFee.call(uintXAur9Tu, {from: accounts[4]});
		const uintEFhqb6b = await MIMOTokenkepfC4P.balanceOf.call(addressopjWkBS, {from: accounts[2]});
		const uint2563siz3Y = await MIMOTokenkepfC4P.setFeeRate.call(uintFYHVJRe, {from: accounts[5]});
		const uintD0GLzMQ = await MIMOTokenkepfC4P.balanceOf.call(addressu1VQfuF, {from: accounts[2]});

		assert.equal(uint256ZvqlOmx, BigInt("50000000000000000"))
		assert.equal(uintD0GLzMQ, BigInt("0"))
		assert.equal(uintEFhqb6b, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokengN2gaxj = await MIMOToken.new({from: accounts[0]});
		const uintZ5oFfSl = BigInt("1302")
		const addressCvn5ep0 = "0x0000000000000000000000000000000000000000"
		const uintNXd99n0 = BigInt("1272")
		const addressWGY5sog = accounts[2]
		const uintj3GCJif = BigInt("580")
		const addressZOd0qee = accounts[2]
		const uintn5yTBy = BigInt("1494")
		const uintsOf1644 = BigInt("914")
		const addressBtfXZlH = accounts[3]
		const addressMrAourX = accounts[2]
		const uintkP8rKYY = BigInt("290")
		const addressKRj9RhY = "0x0000000000000000000000000000000000000001"
		const addressjD9AWYN = accounts[0]
		const addressX4DVSJZ = accounts[3]
		const addressBu8tI7s = accounts[6]
		const boolDjEdKnc = await MIMOTokengN2gaxj.transfer.call(addressCvn5ep0, uintZ5oFfSl, {from: accounts[4]});
		const boolYKcvWZw = await MIMOTokengN2gaxj.transfer.call(addressWGY5sog, uintNXd99n0, {from: accounts[5]});
		const boolqoGNpE = await MIMOTokengN2gaxj.transfer.call(addressZOd0qee, uintj3GCJif, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KPI9auw = await MIMOTokengN2gaxj.setMinFee.call(uintn5yTBy, {from: accounts[1]});
		const boold7EmMCN = await MIMOTokengN2gaxj.transferFrom.call(addressMrAourX, addressBtfXZlH, uintsOf1644, {from: accounts[2]});
		const booljXG6mEQ = await MIMOTokengN2gaxj.transferFrom.call(addressjD9AWYN, addressKRj9RhY, uintkP8rKYY, {from: accounts[1]});
		const uintqjgqK8y = await MIMOTokengN2gaxj.allowance.call(addressBu8tI7s, addressX4DVSJZ, {from: accounts[2]});

		await expect(MIMOTokengN2gaxj.transfer.call(addressCvn5ep0, uintZ5oFfSl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})