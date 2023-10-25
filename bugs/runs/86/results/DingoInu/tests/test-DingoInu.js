const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractuz1O5OR = await DingoInu.new({from: accounts[4]});
		const spenderHFa8MC4 = accounts[1]
		const tokenOwnerSlv6Apn = "0x0000000000000000000000000000000000000001"
		const tokensyaCnmqi = BigInt("1389")
		const toU8ivZmw = accounts[0]
		const tokensJc63n4 = BigInt("629")
		const toHnybvFN = accounts[4]
		const fromUfe21Pr = accounts[0]
		const remainingoMxFCSn = await contractuz1O5OR.allowance.call(tokenOwnerSlv6Apn, spenderHFa8MC4, {from: accounts[3]});
		const successTivKAgW = await contractuz1O5OR.transfer.call(toU8ivZmw, tokensyaCnmqi, {from: accounts[5]});
		const successik4aHTW = await contractuz1O5OR.transferFrom.call(fromUfe21Pr, toHnybvFN, tokensJc63n4, {from: accounts[1]});

		assert.equal(remainingoMxFCSn, 0)
		await expect(contractuz1O5OR.transfer.call(toU8ivZmw, tokensyaCnmqi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contracttirBVhv = await DingoInu.new({from: accounts[2]});
		const tokenscNpebt1 = BigInt("1449")
		const spenderBcf1XS9 = accounts[3]
		const spenderw0w7nCm = accounts[2]
		const tokenOwner6ak3aC = accounts[0]
		const tokensFmG6xtw = BigInt("536")
		const toojOYWmI = accounts[3]
		const tokensJO1xyGN = BigInt("934")
		const spenderK41YOR6 = accounts[5]
		const successeuMAHoD = await contracttirBVhv.approve.call(spenderBcf1XS9, tokenscNpebt1, {from: accounts[5]});
		const remainingOxj1Nz6 = await contracttirBVhv.allowance.call(tokenOwner6ak3aC, spenderw0w7nCm, {from: accounts[2]});
		const successlQal2vS = await contracttirBVhv.transfer.call(toojOYWmI, tokensFmG6xtw, {from: accounts[5]});
		const successjGqoFtp = await contracttirBVhv.approve.call(spenderK41YOR6, tokensJO1xyGN, {from: accounts[3]});

		assert.equal(remainingOxj1Nz6, 0)
		assert.equal(successeuMAHoD, true)
		await expect(contracttirBVhv.transfer.call(toojOYWmI, tokensFmG6xtw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractHoEzY1n = await DingoInu.new({from: accounts[4]});
		const spenderMXmePaV = accounts[2]
		const tokenOwnerD8FDFe4 = accounts[3]
		const tokensiH0WpD4 = BigInt("1161")
		const spendernSuQEwP = accounts[2]
		const remainingsbtQSKM = await contractHoEzY1n.allowance.call(tokenOwnerD8FDFe4, spenderMXmePaV, {from: accounts[0]});
		const successyhnkzM = await contractHoEzY1n.approve.call(spendernSuQEwP, tokensiH0WpD4, {from: accounts[2]});
		const nullxleUL4I = await contractHoEzY1n.totalSupply.call({from: accounts[2]});

		assert.equal(nullxleUL4I, 1000000000000000000000000000000)
		assert.equal(remainingsbtQSKM, 0)
		assert.equal(successyhnkzM, true)
	});

	it('test for DingoInu', async () => {
		const contractDiaE4m = await DingoInu.new({from: accounts[0]});
		const tokenOwnerhYjeNrs = accounts[3]
		const tokensjxbe2dR = BigInt("1229")
		const toidQT2YE = accounts[1]
		const tokenOwnertA2KV8m = accounts[2]
		const tokensTtjDRm5 = BigInt("549")
		const toUtoopR4 = accounts[3]
		const spenderR5YHIPG = accounts[0]
		const tokenOwnerk5pbQ8 = accounts[1]
		const tokensMeyOcnr = BigInt("1168")
		const spender6PozkE = accounts[4]
		const balancex9rSacv = await contractDiaE4m.balanceOf.call(tokenOwnerhYjeNrs, {from: accounts[3]});
		const successKD5MNmv = await contractDiaE4m.transfer.call(toidQT2YE, tokensjxbe2dR, {from: accounts[1]});
		const balanceaKiKyTt = await contractDiaE4m.balanceOf.call(tokenOwnertA2KV8m, {from: accounts[4]});
		const successIslCI5 = await contractDiaE4m.transfer.call(toUtoopR4, tokensTtjDRm5, {from: accounts[4]});
		const remainingrWNASig = await contractDiaE4m.allowance.call(tokenOwnerk5pbQ8, spenderR5YHIPG, {from: "0x0000000000000000000000000000000000000001"});
		const successOS0r5fs = await contractDiaE4m.approve.call(spender6PozkE, tokensMeyOcnr, {from: accounts[3]});

		assert.equal(balancex9rSacv, 0)
		await expect(contractDiaE4m.transfer.call(toidQT2YE, tokensjxbe2dR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractdq7nNmG = await DingoInu.new({from: accounts[3]});
		const spenderLjm1mAZ = accounts[1]
		const tokenOwnerYaRcrfc = accounts[5]
		const tokensOdxumD5 = BigInt("1260")
		const spenderzSC7XRO = accounts[1]
		const tokenOwneruECkAy = accounts[2]
		const spenderhCdGCvo = accounts[1]
		const tokenOwnerXfzlYYt = accounts[3]
		const tokensc8Qk9rz = BigInt("518")
		const toJzNfNyw = accounts[2]
		const fromQI1wOBi = accounts[4]
		const remainingOWDCMs1 = await contractdq7nNmG.allowance.call(tokenOwnerYaRcrfc, spenderLjm1mAZ, {from: accounts[2]});
		const successHTauo2P = await contractdq7nNmG.approve.call(spenderzSC7XRO, tokensOdxumD5, {from: accounts[0]});
		const balanceaIdb6iI = await contractdq7nNmG.balanceOf.call(tokenOwneruECkAy, {from: accounts[3]});
		const remaininghb63zXd = await contractdq7nNmG.allowance.call(tokenOwnerXfzlYYt, spenderhCdGCvo, {from: accounts[4]});
		const successgbKae5f = await contractdq7nNmG.transferFrom.call(fromQI1wOBi, toJzNfNyw, tokensc8Qk9rz, {from: accounts[2]});

		assert.equal(balanceaIdb6iI, 0)
		assert.equal(remainingOWDCMs1, 0)
		assert.equal(remaininghb63zXd, 0)
		assert.equal(successHTauo2P, true)
		await expect(contractdq7nNmG.transferFrom.call(fromQI1wOBi, toJzNfNyw, tokensc8Qk9rz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractt2sYThi = await DingoInu.new({from: accounts[0]});
		const spenderYb3HhL = accounts[1]
		const tokenOwnerOLf7kuq = accounts[1]
		const tokensHjFw84 = BigInt("232")
		const toxTIIbmK = accounts[1]
		const tokensJ7ZQhZK = BigInt("1744")
		const tob4Rso2U = accounts[2]
		const fromXHXGdgC = accounts[0]
		const remainingEjfRV1T = await contractt2sYThi.allowance.call(tokenOwnerOLf7kuq, spenderYb3HhL, {from: accounts[3]});
		const successxoO2NiP = await contractt2sYThi.transfer.call(toxTIIbmK, tokensHjFw84, {from: accounts[0]});
		const successpILBEmz = await contractt2sYThi.transferFrom.call(fromXHXGdgC, tob4Rso2U, tokensJ7ZQhZK, {from: accounts[2]});

		assert.equal(remainingEjfRV1T, 0)
		assert.equal(successxoO2NiP, true)
		await expect(contractt2sYThi.transferFrom.call(fromXHXGdgC, tob4Rso2U, tokensJ7ZQhZK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractzKhU1Uv = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensBsHr248 = BigInt("1320")
		const toiawazRL = accounts[4]
		const tokens7yccPI = BigInt("1988")
		const toqhcceF1 = accounts[2]
		const tokenOwner8A4BYw = accounts[0]
		const successJK0LdQD = await contractzKhU1Uv.transfer.call(toiawazRL, tokensBsHr248, {from: accounts[0]});
		const successFSt6SvZ = await contractzKhU1Uv.transfer.call(toqhcceF1, tokens7yccPI, {from: accounts[4]});
		const balanceWPkXpGn = await contractzKhU1Uv.balanceOf.call(tokenOwner8A4BYw, {from: accounts[2]});
	});
})