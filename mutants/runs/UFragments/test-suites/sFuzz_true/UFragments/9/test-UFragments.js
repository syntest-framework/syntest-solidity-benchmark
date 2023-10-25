const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentseE3TqMA = await UFragments.new({from: accounts[1]});
		const uintJ6DdDga = BigInt("966")
		const addressX3xuSaD = accounts[2]
		const intAnGEdC = BigInt("2007")
		const intgJc9JZW = BigInt("1875")
		const uintOFwsEXj = BigInt("1142")
		const addressHLgmlZF = accounts[5]
		const uintNt6g7S7 = BigInt("95")
		const stringYkpoHKU = "S2JzBRdNc8IyR4akkN8VdHTLqGZ"
		const string3Ouxkr = "fWbsaUTAv09Yi5RxFmcpJLxyUfe5QWHSWt3cnRWLbAnZ1Rxly4nsHSP4fzc3BqgAd641SO"
		const booltHKuBnI = await UFragmentseE3TqMA.transfer.call(addressX3xuSaD, uintJ6DdDga, {from: accounts[1]});
		const int256bMJ6mjs = await UFragmentseE3TqMA.div.call(intgJc9JZW, intAnGEdC, {from: accounts[4]});
		const addressKC0jvo = await UFragmentseE3TqMA.initRebase.call(addressHLgmlZF, uintOFwsEXj, {from: accounts[2]});
		const uint8UPk1vAw = await UFragmentseE3TqMA.decimals.call({from: accounts[3]});
		const stringkelohYQ = await UFragmentseE3TqMA.initialize.call(string3Ouxkr, stringYkpoHKU, uintNt6g7S7, {from: accounts[0]});
		const uint8W5Uxq8C = await UFragmentseE3TqMA.decimals.call({from: accounts[3]});

		await expect(UFragmentseE3TqMA.transfer.call(addressX3xuSaD, uintJ6DdDga, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsNgdFem9 = await UFragments.new({from: accounts[0]});
		const uinty0Mjwuh = BigInt("1840")
		const addressDW7g7XP = accounts[5]
		const intTCYW9Es = BigInt("578")
		const intg1pqXdb = BigInt("-303")
		const intEUApavu = BigInt("-1784")
		const addressNDOS5V = await UFragmentsNgdFem9.initRebase.call(addressDW7g7XP, uinty0Mjwuh, {from: accounts[2]});
		const int256vST1nJB = await UFragmentsNgdFem9.abs.call(intTCYW9Es, {from: accounts[0]});
		const int256e4FVPCJ = await UFragmentsNgdFem9.sub.call(intEUApavu, intg1pqXdb, {from: accounts[4]});

		await expect(UFragmentsNgdFem9.initRebase.call(addressDW7g7XP, uinty0Mjwuh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswrxmHbQ = await UFragments.new({from: accounts[2]});
		const addressda083pa = accounts[1]
		const addressz5ym0dy = accounts[3]
		const addressNy0XtX2 = await UFragmentswrxmHbQ.initialize.call(addressda083pa, {from: "0x0000000000000000000000000000000000000001"});
		const addressFdXVI2Y = await UFragmentswrxmHbQ.initialize.call(addressz5ym0dy, {from: accounts[5]});
		const stringoudaH28 = await UFragmentswrxmHbQ.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolP8JKSBQ = await UFragmentswrxmHbQ.isOwner.call({from: accounts[3]});

		await expect(UFragmentswrxmHbQ.initialize.call(addressda083pa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsVei8ahr = await UFragments.new({from: accounts[0]});
		const intQdUaYt1 = BigInt("-854")
		const intBrsvEV1 = BigInt("910")
		const addresses8ao3T = "0x0000000000000000000000000000000000000001"
		const int2568Sf549 = await UFragmentsVei8ahr.mul.call(intBrsvEV1, intQdUaYt1, {from: accounts[2]});
		const uint256BkWu2sD = await UFragmentsVei8ahr.calRebase.call({from: accounts[5]});
		const stringuOGChUs = await UFragmentsVei8ahr.symbol.call({from: accounts[5]});
		const addressujPsLmc = await UFragmentsVei8ahr.transferOwnership.call(addresses8ao3T, {from: accounts[3]});
		const uint256ILcUqZh = await UFragmentsVei8ahr.totalSupply.call({from: accounts[1]});

		await expect(UFragmentsVei8ahr.mul.call(intBrsvEV1, intQdUaYt1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentszS73mh6 = await UFragments.new({from: accounts[5]});
		const addresswLe4Ez2 = accounts[0]
		const addressI8ABsvk = accounts[3]
		const uintEvExyzp = BigInt("317")
		const addressZsOgWGs = accounts[4]
		const intkwx15eo = BigInt("1925")
		const intRq53mC = BigInt("1281")
		const uintHwBtY45 = BigInt("725")
		const addressOip9HhK = accounts[4]
		const uint256PeN78m0 = await UFragmentszS73mh6.allowance.call(addressI8ABsvk, addresswLe4Ez2, {from: accounts[2]});
		const boolgmfD57Z = await UFragmentszS73mh6.transfer.call(addressZsOgWGs, uintEvExyzp, {from: accounts[3]});
		const int256TmPSSxt = await UFragmentszS73mh6.mul.call(intRq53mC, intkwx15eo, {from: accounts[4]});
		const uint256scUtGca = await UFragmentszS73mh6.calRebase.call({from: accounts[4]});
		const booltWvSPyb = await UFragmentszS73mh6.approve.call(addressOip9HhK, uintHwBtY45, {from: accounts[0]});

		assert.equal(uint256PeN78m0, BigInt("0"))
		await expect(UFragmentszS73mh6.transfer.call(addressZsOgWGs, uintEvExyzp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentszbwkrBD = await UFragments.new({from: accounts[2]});
		const uint7DT2YU = BigInt("1078")
		const addressIQ6qNEn = "0x0000000000000000000000000000000000000001"
		const addressKJUrhgX = accounts[0]
		const uintdu9YGks = BigInt("1888")
		const addressRRY4hp = accounts[2]
		const addresstKzSZib = accounts[5]
		const boolsD7N2rV = await UFragmentszbwkrBD.transferFrom.call(addressKJUrhgX, addressIQ6qNEn, uint7DT2YU, {from: accounts[0]});
		const stringL7xmsJO = await UFragmentszbwkrBD.name.call({from: accounts[2]});
		const boolJB55eX9 = await UFragmentszbwkrBD.transferFrom.call(addresstKzSZib, addressRRY4hp, uintdu9YGks, {from: accounts[3]});
		await UFragmentszbwkrBD.onlyOwner.call({from: accounts[1]});
		const uint256SHzFXHs = await UFragmentszbwkrBD.calRebase.call({from: accounts[1]});

		await expect(UFragmentszbwkrBD.transferFrom.call(addressKJUrhgX, addressIQ6qNEn, uint7DT2YU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsB9AC9rS = await UFragments.new({from: accounts[0]});
		const uintD78FRzW = BigInt("1727")
		const addressQxwmOmu = "0x0000000000000000000000000000000000000001"
		const addresseMYv9EO = accounts[0]
		const boolaBCG5TM = await UFragmentsB9AC9rS.approve.call(addressQxwmOmu, uintD78FRzW, {from: accounts[2]});
		await UFragmentsB9AC9rS.renounceOwnership.call({from: accounts[1]});
		const boolty8z31I = await UFragmentsB9AC9rS.rebaseTimeInfo.call({from: accounts[2]});
		const addressb1Rg7Ev = await UFragmentsB9AC9rS.transferOwnership.call(addresseMYv9EO, {from: accounts[4]});

		assert.equal(boolaBCG5TM, true)
		await expect(UFragmentsB9AC9rS.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentszbwkrBD = await UFragments.new({from: accounts[2]});
		const uinthgRCpKy = BigInt("1888")
		const addressINIsFh2 = accounts[2]
		const addressxLLu0YH = accounts[5]
		const stringL7xmsJO = await UFragmentszbwkrBD.name.call({from: accounts[2]});
		const boolJB55eX9 = await UFragmentszbwkrBD.transferFrom.call(addressxLLu0YH, addressINIsFh2, uinthgRCpKy, {from: accounts[3]});
		await UFragmentszbwkrBD.onlyOwner.call({from: accounts[1]});
		const uint256SHzFXHs = await UFragmentszbwkrBD.calRebase.call({from: accounts[1]});

		assert.equal(stringL7xmsJO, "")
		await expect(UFragmentszbwkrBD.transferFrom.call(addressxLLu0YH, addressINIsFh2, uinthgRCpKy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnP0eUqc = await UFragments.new({from: accounts[3]});
		const uintJruG2j0 = BigInt("163")
		const addresshHdqX8m = accounts[4]
		const uint8hZTcweF = await UFragmentsnP0eUqc.decimals.call({from: accounts[5]});
		const boolrG5i2rN = await UFragmentsnP0eUqc.transfer.call(addresshHdqX8m, uintJruG2j0, {from: accounts[0]});
		const stringTMJQA0q = await UFragmentsnP0eUqc.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8hZTcweF, BigInt("0"))
		await expect(UFragmentsnP0eUqc.transfer.call(addresshHdqX8m, uintJruG2j0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnP0eUqc = await UFragments.new({from: accounts[3]});
		const uintYE3IywM = BigInt("99")
		const stringSxkH2kH = "Ug97fpWCWRyEC0O69rvOy8e4I7mARTgJRTACKY7r7rsNy1eM9CvlPUECQwHPaNLTN7rLGNmRoVD7YkDzixGzbDZdJCC"
		const stringrXWGdKq = "LbwOJezsfOqJuXaBetODGlEPvVuN4ciBL1yDnB1Q0UNdg2Y21YVeXc3W9zIyb5YvnGUb5HlghegMHgWybcGPp"
		const addressEcfauSo = accounts[4]
		const stringHIHVx0I = await UFragmentsnP0eUqc.initialize.call(stringrXWGdKq, stringSxkH2kH, uintYE3IywM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pfoAZ4s = await UFragmentsnP0eUqc.balanceOf.call(addressEcfauSo, {from: "0x0000000000000000000000000000000000000001"});
		const stringTMJQA0q = await UFragmentsnP0eUqc.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringTMJQA0q, "")
		assert.equal(uint256pfoAZ4s, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsnP0eUqc = await UFragments.new({from: accounts[3]});
		const addressuRpwFL3 = accounts[3]
		const boolkaK6spU = await UFragmentsnP0eUqc.rebaseTimeInfo.call({from: accounts[1]});
		const uint256pfoAZ4s = await UFragmentsnP0eUqc.balanceOf.call(addressuRpwFL3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256pfoAZ4s, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsnP0eUqc = await UFragments.new({from: accounts[3]});
		const addressWZAjNRh = accounts[4]
		const uintteSpJZc = BigInt("197")
		const stringT14yej3 = "EHEuTlwTi8C78G3wW6KLkamW2YhAXxaF156eIBEeYtTNorzhhZD9NmnYHO3zx2c"
		const stringmkzjoY2 = "LQj9OBjSiNE8XhjmuGsUKUGVobzcv2E9PLK9jHOgsqt2g8"
		const uint256pfoAZ4s = await UFragmentsnP0eUqc.balanceOf.call(addressWZAjNRh, {from: "0x0000000000000000000000000000000000000001"});
		const stringbKpeH3 = await UFragmentsnP0eUqc.initialize.call(stringmkzjoY2, stringT14yej3, uintteSpJZc, {from: accounts[0]});
		const uint256WDXttm8 = await UFragmentsnP0eUqc.totalSupply.call({from: accounts[4]});

		assert.equal(uint256WDXttm8, BigInt("0"))
		assert.equal(uint256pfoAZ4s, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsnP0eUqc = await UFragments.new({from: accounts[3]});
		const address8YKBhK = accounts[4]
		const addresslrlo8BN = await UFragmentsnP0eUqc.owner.call({from: accounts[3]});
		const uint256pfoAZ4s = await UFragmentsnP0eUqc.balanceOf.call(address8YKBhK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresslrlo8BN, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256pfoAZ4s, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentszbwkrBD = await UFragments.new({from: accounts[2]});
		const uintIgMIqOG = BigInt("1888")
		const addressjnfajPO = accounts[3]
		const addressKEsWHPt = accounts[6]
		const stringj0JliUa = await UFragmentszbwkrBD.symbol.call({from: accounts[2]});
		const boolrx8YeYn = await UFragmentszbwkrBD.isOwner.call({from: accounts[1]});
		const stringL7xmsJO = await UFragmentszbwkrBD.name.call({from: accounts[2]});
		const boolJB55eX9 = await UFragmentszbwkrBD.transferFrom.call(addressKEsWHPt, addressjnfajPO, uintIgMIqOG, {from: accounts[3]});

		assert.equal(boolrx8YeYn, false)
		assert.equal(stringL7xmsJO, "")
		assert.equal(stringj0JliUa, "")
		await expect(UFragmentszbwkrBD.transferFrom.call(addressKEsWHPt, addressjnfajPO, uintIgMIqOG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsGUhLYBX = await UFragments.new({from: accounts[4]});
		const uintdJQW3pC = BigInt("1553")
		const addressObpI2zO = accounts[1]
		const uint256kiWEQK5 = await UFragmentsGUhLYBX.calRebase.call({from: accounts[3]});
		const addressHZeYskL = await UFragmentsGUhLYBX.initRebase.call(addressObpI2zO, uintdJQW3pC, {from: accounts[2]});
		const stringNF9WOz = await UFragmentsGUhLYBX.symbol.call({from: accounts[0]});

		await expect(UFragmentsGUhLYBX.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsWpqsgfP = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshOhvv28 = accounts[5]
		const addressvxxchX = accounts[1]
		const uint8zg4zuVA = await UFragmentsWpqsgfP.decimals.call({from: accounts[0]});
		const addresscNEf7oh = await UFragmentsWpqsgfP.initialize.call(addresshOhvv28, {from: accounts[0]});
		const addressv0m6uLQ = await UFragmentsWpqsgfP.transferOwnership.call(addressvxxchX, {from: accounts[4]});
		await UFragmentsWpqsgfP.onlyOwner.call({from: accounts[0]});
	});
})