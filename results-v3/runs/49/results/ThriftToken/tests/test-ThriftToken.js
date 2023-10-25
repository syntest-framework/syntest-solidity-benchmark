const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenQ2PhguN = await ThriftToken.new({from: accounts[2]});
		const addressvT8Hi80 = "0x0000000000000000000000000000000000000001"
		const uintZIggsOS = BigInt("1442")
		const addresseb3TNxK = accounts[4]
		const uinthDLIE1 = BigInt("1843")
		const addressdyi75a = accounts[2]
		const uintWtk7V2S = BigInt("1831")
		const addressr2FNDeT = accounts[1]
		const uintsr86ovW = BigInt("489")
		const addressTTGlB1q = accounts[1]
		const uintWTazTTv = BigInt("220")
		const addressV3YEAs = accounts[0]
		const addressN8lu32x = accounts[2]
		const uint256hXFSWVD = await ThriftTokenQ2PhguN.balanceOf.call(addressvT8Hi80, {from: accounts[3]});
		const boole7fonC = await ThriftTokenQ2PhguN.increaseApproval.call(addresseb3TNxK, uintZIggsOS, {from: accounts[0]});
		const boolFYE6uXO = await ThriftTokenQ2PhguN.decreaseApproval.call(addressdyi75a, uinthDLIE1, {from: accounts[3]});
		const boolirzOUZA = await ThriftTokenQ2PhguN.transfer.call(addressr2FNDeT, uintWtk7V2S, {from: "0x0000000000000000000000000000000000000001"});
		const boolj8sIQO = await ThriftTokenQ2PhguN.transfer.call(addressTTGlB1q, uintsr86ovW, {from: accounts[1]});
		const boolPWtzPYJ = await ThriftTokenQ2PhguN.transferFrom.call(addressN8lu32x, addressV3YEAs, uintWTazTTv, {from: accounts[4]});

		assert.equal(boolFYE6uXO, true)
		assert.equal(boole7fonC, true)
		assert.equal(uint256hXFSWVD, BigInt("0"))
		await expect(ThriftTokenQ2PhguN.transfer.call(addressr2FNDeT, uintWtk7V2S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenvK8yPEi = await ThriftToken.new({from: accounts[5]});
		const addressEAxwrMq = accounts[2]
		const uintETcZSQg = BigInt("1785")
		const addressOyujuTT = accounts[4]
		const addressEGDMk5W = accounts[0]
		const addressqEaVt7v = accounts[2]
		const uintZIYgxRq = BigInt("1819")
		const addressrrYM18 = accounts[4]
		const addressVeXH49 = accounts[1]
		const uint256W4iengX = await ThriftTokenvK8yPEi.transferableTokens.call(addressEAxwrMq, {from: accounts[0]});
		const boolAtXgRF2 = await ThriftTokenvK8yPEi.approve.call(addressOyujuTT, uintETcZSQg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256a5y13L3 = await ThriftTokenvK8yPEi.balanceOf.call(addressEGDMk5W, {from: accounts[2]});
		const uint256jZRO6hG = await ThriftTokenvK8yPEi.balanceOf.call(addressqEaVt7v, {from: accounts[5]});
		const boolazCnbos = await ThriftTokenvK8yPEi.decreaseApproval.call(addressrrYM18, uintZIYgxRq, {from: accounts[1]});
		const uint256hy6djRs = await ThriftTokenvK8yPEi.balanceOf.call(addressVeXH49, {from: accounts[1]});

		assert.equal(boolAtXgRF2, true)
		assert.equal(boolazCnbos, true)
		assert.equal(uint256W4iengX, BigInt("0"))
		assert.equal(uint256a5y13L3, BigInt("0"))
		assert.equal(uint256hy6djRs, BigInt("0"))
		assert.equal(uint256jZRO6hG, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenhP2Cmoe = await ThriftToken.new({from: accounts[2]});
		const uinthsTh0pa = BigInt("470")
		const addresstv7y0dl = accounts[2]
		const addressWbDS6G4 = accounts[1]
		const uintgytbQnS = BigInt("1025")
		const addressLrpeYCQ = accounts[3]
		const uintQCJfwkA = BigInt("1135")
		const addressBJiM7Mk = "0x0000000000000000000000000000000000000001"
		const addressaj4Tvi9 = accounts[4]
		const addresskINGeCi = accounts[1]
		const uintLhFV8e8 = BigInt("1183")
		const addressXBC9pf = accounts[5]
		const boolgrJ8HU7 = await ThriftTokenhP2Cmoe.transferFrom.call(addressWbDS6G4, addresstv7y0dl, uinthsTh0pa, {from: accounts[0]});
		const booln7c4ajs = await ThriftTokenhP2Cmoe.approve.call(addressLrpeYCQ, uintgytbQnS, {from: accounts[0]});
		const boolJOEJ9fE = await ThriftTokenhP2Cmoe.decreaseApproval.call(addressBJiM7Mk, uintQCJfwkA, {from: accounts[1]});
		const uint256lz0hNGe = await ThriftTokenhP2Cmoe.allowance.call(addresskINGeCi, addressaj4Tvi9, {from: accounts[4]});
		const bool07EWE0 = await ThriftTokenhP2Cmoe.increaseApproval.call(addressXBC9pf, uintLhFV8e8, {from: accounts[1]});

		await expect(ThriftTokenhP2Cmoe.transferFrom.call(addressWbDS6G4, addresstv7y0dl, uinthsTh0pa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenLR0Awun = await ThriftToken.new({from: accounts[0]});
		const addressU67hwwo = "0x0000000000000000000000000000000000000001"
		const uint6Nd50B = BigInt("664")
		const addressXUFanQK = accounts[4]
		const addressDLjKXrr = accounts[3]
		const addresszmVYXpc = accounts[1]
		const addressLJcLMcu = accounts[2]
		const addressGDViEPw = accounts[2]
		const uintFGBdy5p = BigInt("1588")
		const addresspAn64Px = accounts[0]
		const addressEfWQGAz = await ThriftTokenLR0Awun.transferOwnership.call(addressU67hwwo, {from: accounts[2]});
		const booleeX2VSi = await ThriftTokenLR0Awun.decreaseApproval.call(addressXUFanQK, uint6Nd50B, {from: "0x0000000000000000000000000000000000000001"});
		const addressqQWDqPj = await ThriftTokenLR0Awun.transferOwnership.call(addressDLjKXrr, {from: accounts[4]});
		const uint256EHpwCTz = await ThriftTokenLR0Awun.transferableTokens.call(addresszmVYXpc, {from: accounts[3]});
		const uint256G45dYT = await ThriftTokenLR0Awun.allowance.call(addressGDViEPw, addressLJcLMcu, {from: accounts[3]});
		const boolZ4NXQgg = await ThriftTokenLR0Awun.approve.call(addresspAn64Px, uintFGBdy5p, {from: accounts[1]});

		await expect(ThriftTokenLR0Awun.transferOwnership.call(addressU67hwwo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenkCFR1I5 = await ThriftToken.new({from: accounts[0]});
		const addressCyWvp3f = "0x0000000000000000000000000000000000000001"
		const addressg2L1rO8 = accounts[4]
		const uintiNMo2L = BigInt("379")
		const addressf7sTTO2 = accounts[3]
		const uintFWXAa2E = BigInt("515")
		const addressRgpXa2 = accounts[5]
		const addressWCjcj38 = accounts[0]
		const uintLDFbJZA = BigInt("541")
		const addressX6NsoCV = accounts[4]
		const addressuKT1FEr = accounts[0]
		const uint2563FE0ka = await ThriftTokenkCFR1I5.allowance.call(addressg2L1rO8, addressCyWvp3f, {from: accounts[2]});
		const boolYHJIhKj = await ThriftTokenkCFR1I5.increaseApproval.call(addressf7sTTO2, uintiNMo2L, {from: accounts[2]});
		const boolb7UdELO = await ThriftTokenkCFR1I5.approve.call(addressRgpXa2, uintFWXAa2E, {from: accounts[0]});
		const uint256kjlxi9I = await ThriftTokenkCFR1I5.transferableTokens.call(addressWCjcj38, {from: "0x0000000000000000000000000000000000000001"});
		const boolENHX6R0 = await ThriftTokenkCFR1I5.transferFrom.call(addressuKT1FEr, addressX6NsoCV, uintLDFbJZA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYHJIhKj, true)
		assert.equal(boolb7UdELO, true)
		assert.equal(uint2563FE0ka, BigInt("0"))
		assert.equal(uint256kjlxi9I, BigInt("0"))
		await expect(ThriftTokenkCFR1I5.transferFrom.call(addressuKT1FEr, addressX6NsoCV, uintLDFbJZA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenkYlA5cj = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressX7Lq9dQ = accounts[2]
		const uintuSyPzlO = BigInt("382")
		const addressmnDRFF9 = accounts[3]
		const uintmiQDm3N = BigInt("575")
		const addressPwfjc7N = accounts[2]
		const addressnvU7Jqp = accounts[0]
		const addressEEJ8hU = await ThriftTokenkYlA5cj.transferOwnership.call(addressX7Lq9dQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolvik9wL = await ThriftTokenkYlA5cj.decreaseApproval.call(addressmnDRFF9, uintuSyPzlO, {from: accounts[2]});
		const boolMx9oRXo = await ThriftTokenkYlA5cj.increaseApproval.call(addressPwfjc7N, uintmiQDm3N, {from: accounts[4]});
		const uint256IwtibyL = await ThriftTokenkYlA5cj.balanceOf.call(addressnvU7Jqp, {from: accounts[4]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenPeY0fNl = await ThriftToken.new({from: accounts[0]});
		const uintl38bPRx = BigInt("1523")
		const addressaV913vx = "0x0000000000000000000000000000000000000001"
		const addressv9YepyA = "0x0000000000000000000000000000000000000001"
		const addressu4RP1Q = accounts[1]
		const addressCwdwVor = accounts[3]
		const uintELlZY0G = BigInt("1114")
		const address1t6ufe = "0x0000000000000000000000000000000000000001"
		const boolQup4Q7D = await ThriftTokenPeY0fNl.increaseApproval.call(addressaV913vx, uintl38bPRx, {from: accounts[4]});
		const uint256xRZEZ5a = await ThriftTokenPeY0fNl.balanceOf.call(addressv9YepyA, {from: accounts[0]});
		const addressm4BISEI = await ThriftTokenPeY0fNl.transferOwnership.call(addressu4RP1Q, {from: accounts[0]});
		const uint256LUOnVo4 = await ThriftTokenPeY0fNl.balanceOf.call(addressCwdwVor, {from: accounts[1]});
		const boolu80p1z = await ThriftTokenPeY0fNl.increaseApproval.call(address1t6ufe, uintELlZY0G, {from: accounts[5]});

		assert.equal(boolQup4Q7D, true)
		assert.equal(boolu80p1z, true)
		assert.equal(uint256LUOnVo4, BigInt("0"))
		assert.equal(uint256xRZEZ5a, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenvgXq94z = await ThriftToken.new({from: accounts[0]});
		const uintMojyf9 = BigInt("0")
		const addressN1Lkl9p = "0x0000000000000000000000000000000000000001"
		const uintGR6jZa2 = BigInt("861")
		const addressOWSEw8O = accounts[2]
		const boolb3OoOow = await ThriftTokenvgXq94z.transfer.call(addressN1Lkl9p, uintMojyf9, {from: accounts[1]});
		const boolyPBqqR4 = await ThriftTokenvgXq94z.approve.call(addressOWSEw8O, uintGR6jZa2, {from: accounts[2]});

		assert.equal(boolb3OoOow, true)
		await expect(ThriftTokenvgXq94z.approve.call(addressOWSEw8O, uintGR6jZa2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})