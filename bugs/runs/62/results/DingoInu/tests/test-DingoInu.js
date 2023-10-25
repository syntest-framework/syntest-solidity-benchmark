const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractgxsN2sa = await DingoInu.new({from: accounts[0]});
		const tokenswRUnuA = BigInt("345")
		const spenderzCyaSyl = accounts[4]
		const tokenstRKeisB = BigInt("370")
		const toyXfjzHe = accounts[2]
		const tokenssG35xiQ = BigInt("314")
		const spenderkjc0kjV = accounts[2]
		const tokensisZoQFD = BigInt("488")
		const spenderBMZ9RsJ = accounts[2]
		const tokensRgyNwt = BigInt("1587")
		const toLbrNst5 = accounts[0]
		const fromBOwp5da = accounts[4]
		const successdCjo7FH = await contractgxsN2sa.approve.call(spenderzCyaSyl, tokenswRUnuA, {from: accounts[0]});
		const successKJiAxiC = await contractgxsN2sa.transfer.call(toyXfjzHe, tokenstRKeisB, {from: accounts[1]});
		const successMUH1u8 = await contractgxsN2sa.approve.call(spenderkjc0kjV, tokenssG35xiQ, {from: accounts[4]});
		const successPaflXVq = await contractgxsN2sa.approve.call(spenderBMZ9RsJ, tokensisZoQFD, {from: accounts[1]});
		const successI0Lg4p = await contractgxsN2sa.transferFrom.call(fromBOwp5da, toLbrNst5, tokensRgyNwt, {from: accounts[1]});

		assert.equal(successdCjo7FH, true)
		await expect(contractgxsN2sa.transfer.call(toyXfjzHe, tokenstRKeisB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractmy1xN5V = await DingoInu.new({from: accounts[4]});
		const tokenOwnerkiMLsNU = accounts[2]
		const tokensww3eI8K = BigInt("35")
		const spenderbVJm1Gp = accounts[1]
		const tokenscmG1wE0 = BigInt("2015")
		const spenderrEHxRyU = accounts[0]
		const balanceJ7oYGIa = await contractmy1xN5V.balanceOf.call(tokenOwnerkiMLsNU, {from: accounts[1]});
		const successkQ29fu = await contractmy1xN5V.approve.call(spenderbVJm1Gp, tokensww3eI8K, {from: accounts[4]});
		const successj9S2oHe = await contractmy1xN5V.approve.call(spenderrEHxRyU, tokenscmG1wE0, {from: accounts[2]});
		const nullzaYI15d = await contractmy1xN5V.totalSupply.call({from: accounts[2]});

		assert.equal(balanceJ7oYGIa, 0)
		assert.equal(nullzaYI15d, 1000000000000000000000000000000)
		assert.equal(successj9S2oHe, true)
		assert.equal(successkQ29fu, true)
	});

	it('test for DingoInu', async () => {
		const contractKr3HVSI = await DingoInu.new({from: accounts[0]});
		const spenderpUuMgqb = accounts[0]
		const tokenOwnerQSYEwiA = accounts[2]
		const tokensagrPG6m = BigInt("1549")
		const spenderD963sc = accounts[5]
		const remainingslhxc5W = await contractKr3HVSI.allowance.call(tokenOwnerQSYEwiA, spenderpUuMgqb, {from: accounts[5]});
		const successvPfswA8 = await contractKr3HVSI.approve.call(spenderD963sc, tokensagrPG6m, {from: accounts[0]});
		const nullzM3rhOh = await contractKr3HVSI.totalSupply.call({from: accounts[4]});

		assert.equal(nullzM3rhOh, 1000000000000000000000000000000)
		assert.equal(remainingslhxc5W, 0)
		assert.equal(successvPfswA8, true)
	});

	it('test for DingoInu', async () => {
		const contracty5mbCv2 = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenszSGw21 = BigInt("790")
		const spenderYkgkhY = accounts[4]
		const tokensFv1Ir6W = BigInt("1715")
		const spenderdyuyb1a = "0x0000000000000000000000000000000000000001"
		const spenderc6zbBu1 = accounts[3]
		const tokenOwnerukdxOii = accounts[1]
		const successVp4kCx = await contracty5mbCv2.approve.call(spenderYkgkhY, tokenszSGw21, {from: "0x0000000000000000000000000000000000000001"});
		const successIl06wv = await contracty5mbCv2.approve.call(spenderdyuyb1a, tokensFv1Ir6W, {from: accounts[1]});
		const remainingGpjGuTv = await contracty5mbCv2.allowance.call(tokenOwnerukdxOii, spenderc6zbBu1, {from: accounts[1]});
	});

	it('test for DingoInu', async () => {
		const contractkd0BI9j = await DingoInu.new({from: accounts[4]});
		const spenderOKkiAdR = accounts[0]
		const tokenOwnertAfwwY9 = accounts[0]
		const tokensaQLjCbI = BigInt("1492")
		const toZbGrxyK = accounts[0]
		const remainingxmdJ1It = await contractkd0BI9j.allowance.call(tokenOwnertAfwwY9, spenderOKkiAdR, {from: accounts[2]});
		const successDgcSMC = await contractkd0BI9j.transfer.call(toZbGrxyK, tokensaQLjCbI, {from: accounts[4]});

		assert.equal(remainingxmdJ1It, 0)
		assert.equal(successDgcSMC, true)
	});

	it('test for DingoInu', async () => {
		const contractICxhwd = await DingoInu.new({from: accounts[2]});
		const spenderBwkJpnv = accounts[0]
		const tokenOwnerea4H5vv = accounts[1]
		const spenderXKsYpm = accounts[1]
		const tokenOwnerREivDdA = accounts[5]
		const tokenswvuigL = BigInt("1815")
		const toBMKN6vG = accounts[3]
		const fromc9gL5bd = accounts[1]
		const tokensVe3m1RW = BigInt("1419")
		const spenderA2ZqWEv = "0x0000000000000000000000000000000000000001"
		const tokenOwnerfRad7q4 = accounts[4]
		const tokens5v3kA8 = BigInt("1908")
		const toXDmXz5b = accounts[2]
		const spenderwO7HD1S = accounts[4]
		const tokenOwnerPV8KpLY = accounts[1]
		const remainingKzOk6Tf = await contractICxhwd.allowance.call(tokenOwnerea4H5vv, spenderBwkJpnv, {from: accounts[5]});
		const remaininggXAGe3m = await contractICxhwd.allowance.call(tokenOwnerREivDdA, spenderXKsYpm, {from: accounts[0]});
		const successKQFKboB = await contractICxhwd.transferFrom.call(fromc9gL5bd, toBMKN6vG, tokenswvuigL, {from: accounts[4]});
		const successs4tIeF = await contractICxhwd.approve.call(spenderA2ZqWEv, tokensVe3m1RW, {from: accounts[5]});
		const balanceGW4fDY5 = await contractICxhwd.balanceOf.call(tokenOwnerfRad7q4, {from: accounts[1]});
		const successH09udd7 = await contractICxhwd.transfer.call(toXDmXz5b, tokens5v3kA8, {from: accounts[1]});
		const remainingcgg0szS = await contractICxhwd.allowance.call(tokenOwnerPV8KpLY, spenderwO7HD1S, {from: accounts[5]});

		assert.equal(remainingKzOk6Tf, 0)
		assert.equal(remaininggXAGe3m, 0)
		await expect(contractICxhwd.transferFrom.call(fromc9gL5bd, toBMKN6vG, tokenswvuigL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})