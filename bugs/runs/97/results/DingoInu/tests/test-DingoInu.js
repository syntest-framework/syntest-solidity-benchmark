const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractiATxHjD = await DingoInu.new({from: accounts[1]});
		const tokenszNUmerA = BigInt("1048")
		const spenderW31FLYZ = accounts[1]
		const tokensvm2wcds = BigInt("207")
		const spenderKhZnYDD = "0x0000000000000000000000000000000000000001"
		const tokenst1ipoF = BigInt("1231")
		const spenderWXbN0AG = accounts[3]
		const tokensdKSRyiG = BigInt("1354")
		const spenderptyJoVK = accounts[4]
		const tokensVjy2j0d = BigInt("206")
		const toliLfx2 = accounts[1]
		const successMiJJl4 = await contractiATxHjD.approve.call(spenderW31FLYZ, tokenszNUmerA, {from: accounts[3]});
		const successGb4IydV = await contractiATxHjD.approve.call(spenderKhZnYDD, tokensvm2wcds, {from: accounts[1]});
		const successdc1m4kG = await contractiATxHjD.approve.call(spenderWXbN0AG, tokenst1ipoF, {from: accounts[1]});
		const successkDpvHrH = await contractiATxHjD.approve.call(spenderptyJoVK, tokensdKSRyiG, {from: accounts[0]});
		const successYUSkq7 = await contractiATxHjD.transfer.call(toliLfx2, tokensVjy2j0d, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(successGb4IydV, true)
		assert.equal(successMiJJl4, true)
		assert.equal(successdc1m4kG, true)
		assert.equal(successkDpvHrH, true)
		await expect(contractiATxHjD.transfer.call(toliLfx2, tokensVjy2j0d, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractOly71nP = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenOwnero5UxsBP = accounts[4]
		const tokensn5o9K6a = BigInt("1108")
		const toTNWZZTV = accounts[3]
		const fromQYsw2M8 = accounts[0]
		const tokenOwnerJ0GEwgS = accounts[3]
		const balanceRtBa3PT = await contractOly71nP.balanceOf.call(tokenOwnero5UxsBP, {from: accounts[3]});
		const successnSpqGLN = await contractOly71nP.transferFrom.call(fromQYsw2M8, toTNWZZTV, tokensn5o9K6a, {from: accounts[2]});
		const balancezaN2Gbd = await contractOly71nP.balanceOf.call(tokenOwnerJ0GEwgS, {from: accounts[3]});
	});

	it('test for DingoInu', async () => {
		const contractCiW2lj3 = await DingoInu.new({from: accounts[2]});
		const spenderjJXCTqX = accounts[5]
		const tokenOwnerr5CbSgS = accounts[3]
		const tokenOwnerUP24yQ = accounts[0]
		const tokensv5W6AG = BigInt("944")
		const toYAAOGDc = accounts[1]
		const remaininguueCkyC = await contractCiW2lj3.allowance.call(tokenOwnerr5CbSgS, spenderjJXCTqX, {from: accounts[5]});
		const balanceS6AZNKx = await contractCiW2lj3.balanceOf.call(tokenOwnerUP24yQ, {from: accounts[0]});
		const successtAiatqa = await contractCiW2lj3.transfer.call(toYAAOGDc, tokensv5W6AG, {from: accounts[5]});

		assert.equal(balanceS6AZNKx, 0)
		assert.equal(remaininguueCkyC, 0)
		await expect(contractCiW2lj3.transfer.call(toYAAOGDc, tokensv5W6AG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractJp0Wsre = await DingoInu.new({from: accounts[4]});
		const spenderjGOuN8Q = accounts[0]
		const tokenOwnerSlXMkJT = accounts[1]
		const tokensp11uFOw = BigInt("1162")
		const toJ9V0jPb = accounts[0]
		const fromR50vWU5 = accounts[1]
		const tokenOwnerHnukpGP = accounts[2]
		const tokenscrmyvru = BigInt("158")
		const tofgOAsOD = accounts[0]
		const fromls6TvHo = accounts[1]
		const tokenscBMZCc = BigInt("654")
		const toDMfQsNQ = "0x0000000000000000000000000000000000000001"
		const remainingbQD8xHe = await contractJp0Wsre.allowance.call(tokenOwnerSlXMkJT, spenderjGOuN8Q, {from: accounts[3]});
		const successvy7iI0 = await contractJp0Wsre.transferFrom.call(fromR50vWU5, toJ9V0jPb, tokensp11uFOw, {from: accounts[0]});
		const balancehdhMbqW = await contractJp0Wsre.balanceOf.call(tokenOwnerHnukpGP, {from: accounts[5]});
		const successF8k6Hku = await contractJp0Wsre.transferFrom.call(fromls6TvHo, tofgOAsOD, tokenscrmyvru, {from: accounts[1]});
		const successYiRnsYX = await contractJp0Wsre.transfer.call(toDMfQsNQ, tokenscBMZCc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(remainingbQD8xHe, 0)
		await expect(contractJp0Wsre.transferFrom.call(fromR50vWU5, toJ9V0jPb, tokensp11uFOw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractAeamzDC = await DingoInu.new({from: accounts[0]});
		const tokensMpEo4W5 = BigInt("377")
		const spenderRnA6Jyb = accounts[3]
		const spenderpVoKt1Q = accounts[3]
		const tokenOwnerrhFmTNj = accounts[4]
		const spenderXuRePIS = accounts[2]
		const tokenOwnerS68FNtd = accounts[5]
		const tokensNicbQP6 = BigInt("1940")
		const to68g67I = accounts[1]
		const successRP4dJep = await contractAeamzDC.approve.call(spenderRnA6Jyb, tokensMpEo4W5, {from: accounts[4]});
		const remainingJyQ6Q1h = await contractAeamzDC.allowance.call(tokenOwnerrhFmTNj, spenderpVoKt1Q, {from: accounts[5]});
		const remainingi8Eyys6 = await contractAeamzDC.allowance.call(tokenOwnerS68FNtd, spenderXuRePIS, {from: accounts[0]});
		const nullMPEuWuQ = await contractAeamzDC.totalSupply.call({from: accounts[4]});
		const successOwfjqUJ = await contractAeamzDC.transfer.call(to68g67I, tokensNicbQP6, {from: accounts[4]});

		assert.equal(nullMPEuWuQ, 1000000000000000000000000000000)
		assert.equal(remainingJyQ6Q1h, 0)
		assert.equal(remainingi8Eyys6, 0)
		assert.equal(successRP4dJep, true)
		await expect(contractAeamzDC.transfer.call(to68g67I, tokensNicbQP6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractscfHj98 = await DingoInu.new({from: accounts[2]});
		const spendernxNXtxY = accounts[4]
		const tokenOwnerm7bxFso = accounts[3]
		const tokensdwd1DC = BigInt("1334")
		const toMGCh6Vd = accounts[1]
		const tokensO6zGqZB = BigInt("737")
		const totkjFfAS = accounts[4]
		const fromifYtPPx = accounts[3]
		const tokensPwKy5cI = BigInt("1092")
		const spenderHRMCCab = accounts[4]
		const tokensfQzFkOT = BigInt("160")
		const to1GeSEv = accounts[4]
		const tokenskJzdvN = BigInt("1901")
		const spenderU0bBCCb = accounts[0]
		const remainingDMHNWAH = await contractscfHj98.allowance.call(tokenOwnerm7bxFso, spendernxNXtxY, {from: accounts[0]});
		const successNRlYiMl = await contractscfHj98.transfer.call(toMGCh6Vd, tokensdwd1DC, {from: accounts[2]});
		const successk5Z5USr = await contractscfHj98.transferFrom.call(fromifYtPPx, totkjFfAS, tokensO6zGqZB, {from: accounts[4]});
		const successr7HTF3Q = await contractscfHj98.approve.call(spenderHRMCCab, tokensPwKy5cI, {from: accounts[2]});
		const successf6mwA59 = await contractscfHj98.transfer.call(to1GeSEv, tokensfQzFkOT, {from: accounts[4]});
		const successf3oxsH = await contractscfHj98.approve.call(spenderU0bBCCb, tokenskJzdvN, {from: accounts[0]});

		assert.equal(remainingDMHNWAH, 0)
		assert.equal(successNRlYiMl, true)
		await expect(contractscfHj98.transferFrom.call(fromifYtPPx, totkjFfAS, tokensO6zGqZB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})