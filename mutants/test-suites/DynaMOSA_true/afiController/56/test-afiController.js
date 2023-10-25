const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addresslFXvHj1 = accounts[2]
		const afiControllerRpr43DI = await afiController.new(addresslFXvHj1, {from: accounts[0]});
		const addressiq8vovT = accounts[3]
		const addressUSCt2m9 = accounts[1]
		const addressydBQtw = accounts[3]
		const uintZfIzcTV = BigInt("55")
		const addressRNPb8ks = accounts[1]
		const addressBaoYmYu = accounts[3]
		const address8M6Fu4 = accounts[0]
//		const addressYhCPp92 = await afiControllerRpr43DI.setConverter.call(addressydBQtw, addressUSCt2m9, addressiq8vovT, {from: accounts[5]});
//		const addressQ7KPm9d = await afiControllerRpr43DI.earn.call(addressRNPb8ks, uintZfIzcTV, {from: accounts[4]});
//		const addressiz9j87k = await afiControllerRpr43DI.setStrategy.call(address8M6Fu4, addressBaoYmYu, {from: accounts[0]});

		await expect(afiControllerRpr43DI.setConverter.call(addressydBQtw, addressUSCt2m9, addressiq8vovT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressq8ZC2pj = accounts[2]
		const afiControllerCpqUi8D = await afiController.new(addressq8ZC2pj, {from: accounts[5]});
		const addressoMcj3fY = accounts[3]
		const addressolrBud = accounts[5]
		const addressbWNox4F = accounts[4]
		const addressxaa9zx = "0x0000000000000000000000000000000000000001"
		const addressQRGkMFy = "0x0000000000000000000000000000000000000001"
		const addressQmeERX = accounts[1]
		const addressjm8Hctc = accounts[2]
//		const addressLeaB5tG = await afiControllerCpqUi8D.setVault.call(addressolrBud, addressoMcj3fY, {from: accounts[2]});
//		const uintEssloFt = await afiControllerCpqUi8D.balanceOf.call(addressbWNox4F, {from: accounts[4]});
//		const addressINsAEDQ = await afiControllerCpqUi8D.inCaseStrategyTokenGetStuck.call(addressQRGkMFy, addressxaa9zx, {from: accounts[2]});
//		const addressOihsq2t = await afiControllerCpqUi8D.revokeStrategy.call(addressjm8Hctc, addressQmeERX, {from: accounts[3]});

		await expect(afiControllerCpqUi8D.setVault.call(addressolrBud, addressoMcj3fY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressEr76fI0 = accounts[2]
		const afiControllerTZvALDZ = await afiController.new(addressEr76fI0, {from: accounts[4]});
		const uintjmvmoGL = BigInt("1907")
		const addressy4hNyXz = accounts[3]
		const addressOMfC6T1 = accounts[5]
		const addresskyww7lB = accounts[1]
		const addressVapKLPT = accounts[1]
		const addressXrXMtT7 = accounts[4]
//		const addressNnb34Q = await afiControllerTZvALDZ.inCaseTokensGetStuck.call(addressy4hNyXz, uintjmvmoGL, {from: accounts[1]});
//		const addressJgocf0z = await afiControllerTZvALDZ.setVault.call(addresskyww7lB, addressOMfC6T1, {from: accounts[3]});
//		const addresszjG7Sqn = await afiControllerTZvALDZ.setOneSplit.call(addressVapKLPT, {from: accounts[1]});
//		const address78Cy7E = await afiControllerTZvALDZ.setRewards.call(addressXrXMtT7, {from: accounts[0]});

		await expect(afiControllerTZvALDZ.inCaseTokensGetStuck.call(addressy4hNyXz, uintjmvmoGL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressklbW3Jt = accounts[4]
		const afiControllergCxShBi = await afiController.new(addressklbW3Jt, {from: accounts[4]});
		const addressLV5H1Y = accounts[0]
		const addressF7hPmsI = accounts[3]
		const addressDS16qn7 = accounts[3]
		const addressFCM1NsZ = accounts[2]
		const addressfJ6pXcJ = "0x0000000000000000000000000000000000000001"
		const addressvuhu27I = accounts[2]
		const addressvuzmtAj = accounts[0]
		const addresskiXDSGd = accounts[2]
		const addressxHQAVKy = accounts[4]
		const addressis47OnQ = accounts[0]
//		const addressVzxRobC = await afiControllergCxShBi.inCaseStrategyTokenGetStuck.call(addressF7hPmsI, addressLV5H1Y, {from: accounts[4]});
//		const addresslzsGf7 = await afiControllergCxShBi.setVault.call(addressFCM1NsZ, addressDS16qn7, {from: accounts[4]});
//		const addressfJcCeY = await afiControllergCxShBi.setStrategy.call(addressvuhu27I, addressfJ6pXcJ, {from: accounts[2]});
//		const addressYAMzCrz = await afiControllergCxShBi.setStrategist.call(addressvuzmtAj, {from: accounts[3]});
//		const addressiOohqfa = await afiControllergCxShBi.setRewards.call(addresskiXDSGd, {from: accounts[3]});
//		const addressW6b8VhB = await afiControllergCxShBi.inCaseStrategyTokenGetStuck.call(addressis47OnQ, addressxHQAVKy, {from: accounts[3]});

		await expect(afiControllergCxShBi.inCaseStrategyTokenGetStuck.call(addressF7hPmsI, addressLV5H1Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdQANCMc = accounts[3]
		const afiControllerSPcIuSF = await afiController.new(addressdQANCMc, {from: accounts[0]});
		const addressAf6OnT = accounts[3]
		const addressgUUH78w = accounts[2]
		const addressTq7jCQ0 = accounts[5]
		const uintuJAo76g = BigInt("1765")
		const addressLFSA7Of = accounts[0]
		const addressjloG9b = accounts[1]
		const addressrfvHOK6 = "0x0000000000000000000000000000000000000001"
//		const addressgciKZXg = await afiControllerSPcIuSF.withdrawAll.call(addressAf6OnT, {from: accounts[1]});
//		const addressIT5Sc9T = await afiControllerSPcIuSF.revokeStrategy.call(addressTq7jCQ0, addressgUUH78w, {from: accounts[0]});
//		const addressh4wXvYL = await afiControllerSPcIuSF.earn.call(addressLFSA7Of, uintuJAo76g, {from: accounts[0]});
//		const uintUPbuIf = await afiControllerSPcIuSF.balanceOf.call(addressjloG9b, {from: accounts[2]});
//		const addressEZYAnp = await afiControllerSPcIuSF.setOneSplit.call(addressrfvHOK6, {from: accounts[1]});

		await expect(afiControllerSPcIuSF.withdrawAll.call(addressAf6OnT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslvIK0yZ = accounts[4]
		const afiControlleriVf44Vz = await afiController.new(addresslvIK0yZ, {from: accounts[4]});
		const uintah0e3Ng = BigInt("660")
		const addressjRqxx0t = accounts[1]
		const addressjzpODcr = accounts[3]
		const addresss8SpSuM = accounts[0]
		const addresswe8mDP1 = accounts[1]
		const addressmyo6Px = accounts[3]
		const addressQV4uFUt = accounts[5]
		const uintF2PVSgZ = BigInt("615")
		const addressli80xBf = accounts[3]
		const addressEbxHIsZ = accounts[1]
		const addressOTejhso = accounts[2]
		const addresslvFvwSa = accounts[4]
//		const addressLFU4mHN = await afiControlleriVf44Vz.yearn.call(addressjzpODcr, addressjRqxx0t, uintah0e3Ng, {from: accounts[2]});
//		const address23LmUg = await afiControlleriVf44Vz.inCaseStrategyTokenGetStuck.call(addresswe8mDP1, addresss8SpSuM, {from: accounts[4]});
//		const addressNqKvefp = await afiControlleriVf44Vz.approveStrategy.call(addressQV4uFUt, addressmyo6Px, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKSePyrd = await afiControlleriVf44Vz.yearn.call(addressEbxHIsZ, addressli80xBf, uintF2PVSgZ, {from: accounts[3]});
//		const addresskTkI7bQ = await afiControlleriVf44Vz.setStrategy.call(addresslvFvwSa, addressOTejhso, {from: accounts[0]});

		await expect(afiControlleriVf44Vz.yearn.call(addressjzpODcr, addressjRqxx0t, uintah0e3Ng, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIYH1d20 = accounts[3]
		const afiControllerngxXyW = await afiController.new(addressIYH1d20, {from: "0x0000000000000000000000000000000000000001"});
		const addresstzCxEcD = accounts[1]
		const addresstbn1nGY = accounts[3]
		const addressQ1G8iaS = accounts[1]
		const addressrcn8lJ = accounts[4]
		const addressdcacsY8 = accounts[0]
		const addressQNhcUe0 = "0x0000000000000000000000000000000000000001"
		const addressqJidbal = await afiControllerngxXyW.revokeStrategy.call(addresstbn1nGY, addresstzCxEcD, {from: accounts[3]});
		const addressu7dbEk = await afiControllerngxXyW.withdrawAll.call(addressQ1G8iaS, {from: accounts[3]});
		const addresshxANsS4 = await afiControllerngxXyW.setStrategist.call(addressrcn8lJ, {from: accounts[3]});
		const addressSJy4VYD = await afiControllerngxXyW.setVault.call(addressQNhcUe0, addressdcacsY8, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addresshizJ1Pw = accounts[2]
		const afiControllerTZvALDZ = await afiController.new(addresshizJ1Pw, {from: accounts[4]});
		const uintCOmiaGC = BigInt("574")
		const addressgYkkWh4 = accounts[3]
		const uintQh9VnYj = BigInt("713")
		const addressUEXjhEg = accounts[3]
		const addressnJbrjxt = accounts[5]
		const addresshi9A7B = accounts[1]
		const addressu9TEWBN = accounts[1]
		const uintIaDJ2Ls = BigInt("62")
		const addresshpzsGDu = accounts[4]
		const addressE8ZBLcs = accounts[4]
//		const addressAZKWO5j = await afiControllerTZvALDZ.earn.call(addressgYkkWh4, uintCOmiaGC, {from: accounts[2]});
//		const addressNnb34Q = await afiControllerTZvALDZ.inCaseTokensGetStuck.call(addressUEXjhEg, uintQh9VnYj, {from: accounts[1]});
//		const addressJgocf0z = await afiControllerTZvALDZ.setVault.call(addresshi9A7B, addressnJbrjxt, {from: accounts[3]});
//		const addresszjG7Sqn = await afiControllerTZvALDZ.setOneSplit.call(addressu9TEWBN, {from: accounts[1]});
//		const addressfsmHyQe = await afiControllerTZvALDZ.inCaseTokensGetStuck.call(addresshpzsGDu, uintIaDJ2Ls, {from: accounts[0]});
//		const address78Cy7E = await afiControllerTZvALDZ.setRewards.call(addressE8ZBLcs, {from: accounts[0]});

		await expect(afiControllerTZvALDZ.earn.call(addressgYkkWh4, uintCOmiaGC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressunaQ6U6 = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addressunaQ6U6, {from: accounts[1]});
		const uintNAQchg0 = BigInt("135")
		const addressG0OagMm = accounts[0]
		const addressnuR09Ry = accounts[0]
		const addressUVbiygV = accounts[3]
		const addressWvv9XcJ = accounts[1]
		const addressIVlp9Sa = accounts[0]
//		const uintXuWuW12 = await afiControllerLiFAHeP.getExpectedReturn.call(addressnuR09Ry, addressG0OagMm, uintNAQchg0, {from: accounts[5]});
//		const addressphEiRtE = await afiControllerLiFAHeP.setConverter.call(addressIVlp9Sa, addressWvv9XcJ, addressUVbiygV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerLiFAHeP.getExpectedReturn.call(addressnuR09Ry, addressG0OagMm, uintNAQchg0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBgkxx1v = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addressBgkxx1v, {from: accounts[1]});
		const addresstU8x8f7 = accounts[3]
		const uintIr2Uz2g = BigInt("135")
		const addresscSZjgjk = accounts[0]
		const addressVTrfYwp = accounts[0]
//		const addressJ5ecKjI = await afiControllerLiFAHeP.setGovernance.call(addresstU8x8f7, {from: accounts[3]});
//		const uintXuWuW12 = await afiControllerLiFAHeP.getExpectedReturn.call(addressVTrfYwp, addresscSZjgjk, uintIr2Uz2g, {from: accounts[5]});

		await expect(afiControllerLiFAHeP.setGovernance.call(addresstU8x8f7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressO8K07IA = accounts[3]
		const afiControllerrjtjvnW = await afiController.new(addressO8K07IA, {from: accounts[1]});
		const addressgDikSj9 = accounts[2]
		const addressyUXm3sU = accounts[1]
		const addresszZ2l7cp = accounts[3]
		const addressbjykifD = accounts[3]
		const addressQe1CDCb = accounts[4]
		const addressXlJXnTn = "0x0000000000000000000000000000000000000001"
		const addressMRZW31K = accounts[3]
//		const addressKZiF8UZ = await afiControllerrjtjvnW.revokeStrategy.call(addressyUXm3sU, addressgDikSj9, {from: accounts[2]});
//		const addressDqKyHg3 = await afiControllerrjtjvnW.inCaseStrategyTokenGetStuck.call(addressbjykifD, addresszZ2l7cp, {from: accounts[0]});
//		const addressiyZQJQK = await afiControllerrjtjvnW.approveStrategy.call(addressXlJXnTn, addressQe1CDCb, {from: accounts[1]});
//		const uintvKvDrXW = await afiControllerrjtjvnW.balanceOf.call(addressMRZW31K, {from: accounts[4]});

		await expect(afiControllerrjtjvnW.revokeStrategy.call(addressyUXm3sU, addressgDikSj9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressapFUCNg = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addressapFUCNg, {from: accounts[1]});
		const addressXVuO8bX = accounts[3]
		const addressy1IZx1u = accounts[4]
		const addressnCJerbD = accounts[4]
		const addresshQLHjN0 = accounts[4]
		const addressYK9SmFT = accounts[0]
		const addressUTG6dYI = await afiControllerLiFAHeP.revokeStrategy.call(addressy1IZx1u, addressXVuO8bX, {from: accounts[1]});
//		const addressphEiRtE = await afiControllerLiFAHeP.setConverter.call(addressYK9SmFT, addresshQLHjN0, addressnCJerbD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerLiFAHeP.setConverter.call(addressYK9SmFT, addresshQLHjN0, addressnCJerbD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrObDtNN = accounts[3]
		const afiControllerrjtjvnW = await afiController.new(addressrObDtNN, {from: accounts[1]});
		const addressOgyFVCT = accounts[0]
		const addressdgClOj6 = accounts[2]
		const addressrRcWh4a = accounts[1]
		const address3EkQp6 = accounts[3]
		const addressQ7L0OU6 = accounts[3]
		const addressbnIqbuJ = accounts[4]
		const addressCjzu2AV = "0x0000000000000000000000000000000000000001"
		const addressnzEk4Oa = accounts[3]
//		const addressHXyaulT = await afiControllerrjtjvnW.setStrategist.call(addressOgyFVCT, {from: accounts[3]});
//		const addressKZiF8UZ = await afiControllerrjtjvnW.revokeStrategy.call(addressrRcWh4a, addressdgClOj6, {from: accounts[2]});
//		const addressDqKyHg3 = await afiControllerrjtjvnW.inCaseStrategyTokenGetStuck.call(addressQ7L0OU6, address3EkQp6, {from: accounts[0]});
//		const addressiyZQJQK = await afiControllerrjtjvnW.approveStrategy.call(addressCjzu2AV, addressbnIqbuJ, {from: accounts[1]});
//		const uintvKvDrXW = await afiControllerrjtjvnW.balanceOf.call(addressnzEk4Oa, {from: accounts[4]});

		await expect(afiControllerrjtjvnW.setStrategist.call(addressOgyFVCT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressB1RSqrI = accounts[3]
		const afiControllergDb8hkh = await afiController.new(addressB1RSqrI, {from: accounts[2]});
		const uintwgoZy7n = BigInt("169")
		const addressYUyJeOb = accounts[2]
		const addressP29hQaV = accounts[5]
		const addresseXEUBYT = accounts[1]
		const addresslBov0o = "0x0000000000000000000000000000000000000001"
		const addressPyQ95Wq = accounts[0]
		const addressW9KU8l = accounts[1]
		const uintZQgW4mQ = BigInt("984")
		const addressoLe0oU1 = accounts[2]
		const addressPuV24FD = accounts[3]
		const addressFvTzNOe = accounts[5]
//		const addressG3QSui8 = await afiControllergDb8hkh.inCaseTokensGetStuck.call(addressYUyJeOb, uintwgoZy7n, {from: accounts[2]});
//		const addresstNv7VJk = await afiControllergDb8hkh.setConverter.call(addresslBov0o, addresseXEUBYT, addressP29hQaV, {from: accounts[2]});
//		const addressDmBog31 = await afiControllergDb8hkh.setStrategy.call(addressW9KU8l, addressPyQ95Wq, {from: accounts[3]});
//		const uintF4AUNM = await afiControllergDb8hkh.getExpectedReturn.call(addressPuV24FD, addressoLe0oU1, uintZQgW4mQ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZDk7muk = await afiControllergDb8hkh.setGovernance.call(addressFvTzNOe, {from: accounts[3]});

		await expect(afiControllergDb8hkh.inCaseTokensGetStuck.call(addressYUyJeOb, uintwgoZy7n, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOUmecZU = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addressOUmecZU, {from: accounts[1]});
		const addressdo3KgBZ = accounts[2]
		const addresscdFYuQZ = accounts[3]
		const addressi9x6KwC = accounts[4]
		const addressYr9E0dQ = accounts[1]
		const addressLSu25ei = accounts[1]
		const addresscpveM2J = accounts[1]
//		const addressscJIbgP = await afiControllerLiFAHeP.setRewards.call(addressdo3KgBZ, {from: accounts[2]});
//		const addressphEiRtE = await afiControllerLiFAHeP.setConverter.call(addressYr9E0dQ, addressi9x6KwC, addresscdFYuQZ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressaGFsu3 = await afiControllerLiFAHeP.inCaseStrategyTokenGetStuck.call(addresscpveM2J, addressLSu25ei, {from: accounts[3]});

		await expect(afiControllerLiFAHeP.setRewards.call(addressdo3KgBZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressp4kEUzP = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addressp4kEUzP, {from: accounts[1]});
		const addressZrmt21w = accounts[2]
		const addressiEuKgpF = accounts[3]
		const addressB13UT3b = accounts[4]
		const addressmsFIHmL = accounts[4]
//		const uintOxCgjmJ = await afiControllerLiFAHeP.balanceOf.call(addressZrmt21w, {from: accounts[4]});
//		const addressphEiRtE = await afiControllerLiFAHeP.setConverter.call(addressmsFIHmL, addressB13UT3b, addressiEuKgpF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerLiFAHeP.balanceOf.call(addressZrmt21w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgt1qGcc = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addressgt1qGcc, {from: accounts[1]});
		const addressmpXBsw7 = accounts[4]
		const address33oiTQ = await afiControllerLiFAHeP.setOneSplit.call(addressmpXBsw7, {from: accounts[1]});
	});

	it('test for afiController', async () => {
		const addressRH60SHX = "0x0000000000000000000000000000000000000001"
		const afiControllerYjbweGn = await afiController.new(addressRH60SHX, {from: accounts[1]});
		const addressZlqkk5 = accounts[2]
		const addressoDccq9 = accounts[4]
		const addresst8CQmrP = accounts[5]
//		const addressiBvyPsA = await afiControllerYjbweGn.approveStrategy.call(addressoDccq9, addressZlqkk5, {from: accounts[0]});
//		const addressFDdWy2C = await afiControllerYjbweGn.withdrawAll.call(addresst8CQmrP, {from: accounts[1]});

		await expect(afiControllerYjbweGn.approveStrategy.call(addressoDccq9, addressZlqkk5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWppIbxi = "0x0000000000000000000000000000000000000001"
		const afiControllerYjbweGn = await afiController.new(addressWppIbxi, {from: accounts[1]});
		const addressqmKXcFE = accounts[4]
		const addressWSUNy1f = accounts[4]
		const addressVkzE00H = accounts[1]
		const addressnhsz2t = accounts[5]
//		const addressQ0YrxMS = await afiControllerYjbweGn.setStrategy.call(addressWSUNy1f, addressqmKXcFE, {from: accounts[4]});
//		const uintgd3skr4 = await afiControllerYjbweGn.balanceOf.call(addressVkzE00H, {from: accounts[0]});
//		const addressFDdWy2C = await afiControllerYjbweGn.withdrawAll.call(addressnhsz2t, {from: accounts[1]});

		await expect(afiControllerYjbweGn.setStrategy.call(addressWSUNy1f, addressqmKXcFE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMUL50sC = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addressMUL50sC, {from: accounts[1]});
		const uintHwXahF6 = BigInt("1637")
		const addressHOPpxk = accounts[1]
		const addressZuzzgy7 = accounts[3]
		const addressa8gi6sW = accounts[4]
		const addressEl40j0v = accounts[3]
//		const addressyMqSRg4 = await afiControllerLiFAHeP.withdraw.call(addressHOPpxk, uintHwXahF6, {from: accounts[0]});
//		const addressphEiRtE = await afiControllerLiFAHeP.setConverter.call(addressEl40j0v, addressa8gi6sW, addressZuzzgy7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerLiFAHeP.withdraw.call(addressHOPpxk, uintHwXahF6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressO6Mb8An = accounts[3]
		const afiControllergDb8hkh = await afiController.new(addressO6Mb8An, {from: accounts[2]});
		const uintyKB31Sp = BigInt("1482")
		const uintmmNcXHt = BigInt("914")
		const addressmgE5Qlt = accounts[4]
		const uintxp9BdbV = BigInt("168")
		const addresssG6Xsk8 = accounts[4]
		const addressuHu2h8G = accounts[2]
		const addressdPuGWQz = accounts[4]
//		const uintHoJoMbr = await afiControllergDb8hkh.setSplit.call(uintyKB31Sp, {from: accounts[0]});
//		const addressKjgS0V1 = await afiControllergDb8hkh.earn.call(addressmgE5Qlt, uintmmNcXHt, {from: accounts[3]});
//		const addressG3QSui8 = await afiControllergDb8hkh.inCaseTokensGetStuck.call(addresssG6Xsk8, uintxp9BdbV, {from: accounts[2]});
//		const addressHdiW9rb = await afiControllergDb8hkh.setStrategy.call(addressdPuGWQz, addressuHu2h8G, {from: accounts[2]});

		await expect(afiControllergDb8hkh.setSplit.call(uintyKB31Sp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvFS0T1Y = "0x0000000000000000000000000000000000000001"
		const afiControllerYjbweGn = await afiController.new(addressvFS0T1Y, {from: accounts[1]});
		const addressVjoit3h = accounts[5]
//		const addressFDdWy2C = await afiControllerYjbweGn.withdrawAll.call(addressVjoit3h, {from: accounts[1]});

		await expect(afiControllerYjbweGn.withdrawAll.call(addressVjoit3h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWEbAK40 = accounts[3]
		const afiControllergDb8hkh = await afiController.new(addressWEbAK40, {from: accounts[2]});
		const addressqVXfvCy = accounts[1]
		const addressZvLQiZC = accounts[1]
		const addresslvSkMKC = await afiControllergDb8hkh.setVault.call(addressZvLQiZC, addressqVXfvCy, {from: accounts[2]});
	});

	it('test for afiController', async () => {
		const addressDffCYfO = accounts[3]
		const afiControllergDb8hkh = await afiController.new(addressDffCYfO, {from: accounts[2]});
		const addresslYtkteO = accounts[2]
		const addressKrJwfI = accounts[4]
//		const addressHdiW9rb = await afiControllergDb8hkh.setStrategy.call(addressKrJwfI, addresslYtkteO, {from: accounts[2]});

		await expect(afiControllergDb8hkh.setStrategy.call(addressKrJwfI, addresslYtkteO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresszc8zEq = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addresszc8zEq, {from: accounts[1]});
		const uintWldMAcj = BigInt("1179")
		const address33YI0r = accounts[5]
		const uintxbuNjgb = await afiControllerLiFAHeP.setSplit.call(uintWldMAcj, {from: accounts[1]});
//		const addressJ5ecKjI = await afiControllerLiFAHeP.setGovernance.call(address33YI0r, {from: accounts[3]});

		await expect(afiControllerLiFAHeP.setGovernance.call(address33YI0r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressB0lzaQy = accounts[2]
		const afiControllerTZvALDZ = await afiController.new(addressB0lzaQy, {from: accounts[4]});
		const addressTNXsMmc = accounts[2]
		const uintpIev5Hq = BigInt("568")
		const addresshrrsR3o = accounts[4]
		const addressJxzAboQ = await afiControllerTZvALDZ.setStrategist.call(addressTNXsMmc, {from: accounts[4]});
//		const addressAZKWO5j = await afiControllerTZvALDZ.earn.call(addresshrrsR3o, uintpIev5Hq, {from: accounts[2]});

		await expect(afiControllerTZvALDZ.earn.call(addresshrrsR3o, uintpIev5Hq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCqSorP0 = accounts[2]
		const afiControllerTZvALDZ = await afiController.new(addressCqSorP0, {from: accounts[4]});
		const addressQwPUAb = accounts[0]
		const addressRwCSsso = accounts[0]
		const addressFHMZTYh = accounts[2]
		const addressEa2VylV = accounts[3]
		const uintMRMvoRg = BigInt("615")
		const addresscBjPyHM = accounts[4]
		const address8jxWoO = await afiControllerTZvALDZ.approveStrategy.call(addressRwCSsso, addressQwPUAb, {from: accounts[4]});
//		const addressbLgZSYj = await afiControllerTZvALDZ.revokeStrategy.call(addressEa2VylV, addressFHMZTYh, {from: accounts[3]});
//		const addressAZKWO5j = await afiControllerTZvALDZ.earn.call(addresscBjPyHM, uintMRMvoRg, {from: accounts[2]});

		await expect(afiControllerTZvALDZ.revokeStrategy.call(addressEa2VylV, addressFHMZTYh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvxsQLbQ = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addressvxsQLbQ, {from: accounts[1]});
		const uintKlQOb1c = BigInt("1604")
		const addresscXuQh7S = accounts[3]
		const addressZNTc4uQ = accounts[4]
		const addressfPSYyGy = accounts[4]
//		const addressd32Jm1S = await afiControllerLiFAHeP.yearn.call(addressZNTc4uQ, addresscXuQh7S, uintKlQOb1c, {from: accounts[1]});
//		const addressscJIbgP = await afiControllerLiFAHeP.setRewards.call(addressfPSYyGy, {from: accounts[2]});

		await expect(afiControllerLiFAHeP.yearn.call(addressZNTc4uQ, addresscXuQh7S, uintKlQOb1c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfir7mNW = accounts[2]
		const afiControllerTZvALDZ = await afiController.new(addressfir7mNW, {from: accounts[4]});
		const addressnWzukH = accounts[4]
		const uintriHvEh1 = BigInt("574")
		const addressWQgzSXo = accounts[4]
		const addresshb13hqa = accounts[2]
		const addressa85t6Cb = accounts[3]
		const addressktMjJ8n = await afiControllerTZvALDZ.setGovernance.call(addressnWzukH, {from: accounts[4]});
//		const addressAZKWO5j = await afiControllerTZvALDZ.earn.call(addressWQgzSXo, uintriHvEh1, {from: accounts[2]});
//		const addressGRJnlg3 = await afiControllerTZvALDZ.revokeStrategy.call(addressa85t6Cb, addresshb13hqa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerTZvALDZ.earn.call(addressWQgzSXo, uintriHvEh1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKsu2OZ = accounts[3]
		const afiControllerLiFAHeP = await afiController.new(addressKsu2OZ, {from: accounts[1]});
		const addressEhA6qq8 = accounts[4]
		const addressDZ5mDgR = accounts[2]
		const addresssdUtmRs = accounts[3]
		const uintmBzwTv4 = BigInt("687")
		const addressovAUyKy = accounts[4]
		const addresso6oxnnS = accounts[3]
		const addressLM4jiQa = accounts[5]
		const addresst9H4tRp = accounts[0]
		const addressgcAV80 = accounts[4]
		const addressy6V6CNu = await afiControllerLiFAHeP.setConverter.call(addresssdUtmRs, addressDZ5mDgR, addressEhA6qq8, {from: accounts[1]});
//		const addressBMP8kt3 = await afiControllerLiFAHeP.withdraw.call(addressovAUyKy, uintmBzwTv4, {from: accounts[3]});
//		const addressphEiRtE = await afiControllerLiFAHeP.setConverter.call(addresst9H4tRp, addressLM4jiQa, addresso6oxnnS, {from: "0x0000000000000000000000000000000000000001"});
//		const uintVjpW4T0 = await afiControllerLiFAHeP.balanceOf.call(addressgcAV80, {from: accounts[3]});

		await expect(afiControllerLiFAHeP.withdraw.call(addressovAUyKy, uintmBzwTv4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})