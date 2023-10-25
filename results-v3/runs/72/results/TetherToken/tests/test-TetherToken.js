const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintLodrQM = BigInt("1545")
		const stringyq4VuVl = "T9zRw0Xu7PkQvJ9VmQOWKFMrlOw"
		const stringOiIoNct = "dQdDkdj0Dah2FUGlyeEs1OWIoAfTUTcPGDnTsjpYI"
		const uintDa0rPT6 = BigInt("1406")
		const TetherTokenqnWXao8 = await TetherToken.new(uintLodrQM, stringyq4VuVl, stringOiIoNct, uintDa0rPT6, {from: accounts[4]});
		const uintpG5wCWp = BigInt("753")
		const uintGrUJJX = BigInt("2003")
		const addressUg7dDsU = accounts[3]
		const addressm03xNyg = accounts[1]
		const uintb4HBfZe = await TetherTokenqnWXao8.redeem.call(uintpG5wCWp, {from: accounts[4]});
		const addressqHRnqGj = await TetherTokenqnWXao8.approve.call(addressUg7dDsU, uintGrUJJX, {from: accounts[3]});
		const uintRZgIlGQ = await TetherTokenqnWXao8.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressrj33JOE = await TetherTokenqnWXao8.deprecate.call(addressm03xNyg, {from: accounts[3]});

		assert.equal(uintRZgIlGQ, BigInt("1545"))
		await expect(TetherTokenqnWXao8.deprecate.call(addressm03xNyg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintNOWbQTB = BigInt("1312")
		const stringdDe25dM = "uqpODXnEQMOu6jhAoNttliPlP31mHDr7tOxe69WZyBVoRitZ7Fdl5orR1AeriBzdjEyXQzT5PxTlSJUP7FURd8p4"
		const stringpFZ3vGA = "OozpscwY7SluqBh2LiLXQ3P6Lk9fj12IStxvEGjhgtEJRGV3hebSybwCILwlDL8aK2EKYeV5N"
		const uint5SiznJ = BigInt("1453")
		const TetherTokenchU1jv = await TetherToken.new(uintNOWbQTB, stringdDe25dM, stringpFZ3vGA, uint5SiznJ, {from: accounts[4]});
		const uintnwj41cS = BigInt("434")
		const addressi3d7Ia = accounts[3]
		const address9Uhzxa = accounts[4]
		const addresshTIDj0r = accounts[4]
		const addressf9Pd732 = await TetherTokenchU1jv.transferFrom.call(address9Uhzxa, addressi3d7Ia, uintnwj41cS, {from: accounts[1]});
		const uintXr8fwrM = await TetherTokenchU1jv.balanceOf.call(addresshTIDj0r, {from: accounts[1]});

		await expect(TetherTokenchU1jv.transferFrom.call(address9Uhzxa, addressi3d7Ia, uintnwj41cS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintvgz6ylg = BigInt("315")
		const stringdHT39rO = "GzJyIBtEKLL3HHcdfWmxcKlfiG8wEz"
		const stringwmUBR6V = "wJXpSp6Sz1J9kGPlmuDJuJzcTePznl1P5ppU94Jl9"
		const uintMW55kGL = BigInt("1469")
		const TetherTokenlwc9q3H = await TetherToken.new(uintvgz6ylg, stringdHT39rO, stringwmUBR6V, uintMW55kGL, {from: accounts[1]});
		const addressdMhHrQI = accounts[3]
		const addressKnr7r4w = accounts[3]
		const addressDStT3jp = accounts[2]
		const uintEEioAYc = BigInt("1325")
		const uintQ4xkD0b = await TetherTokenlwc9q3H.balanceOf.call(addressdMhHrQI, {from: accounts[4]});
		const uintCQ4ohEU = await TetherTokenlwc9q3H.allowance.call(addressDStT3jp, addressKnr7r4w, {from: accounts[3]});
		const uintZzkKp2l = await TetherTokenlwc9q3H.redeem.call(uintEEioAYc, {from: accounts[1]});

		assert.equal(uintCQ4ohEU, BigInt("0"))
		assert.equal(uintQ4xkD0b, BigInt("0"))
		await expect(TetherTokenlwc9q3H.redeem.call(uintEEioAYc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintUs7kDpG = BigInt("1967")
		const stringlJL2zaY = "A"
		const stringvE32fRm = "1QwriDgZmYwVgUYSPby"
		const uinte9nLqQa = BigInt("731")
		const TetherToken6xyMUk = await TetherToken.new(uintUs7kDpG, stringlJL2zaY, stringvE32fRm, uinte9nLqQa, {from: accounts[1]});
		const uintBh4qtv = BigInt("1938")
		const uintyskQX3b = BigInt("423")
		const uintqSqnntB = BigInt("468")
		const uintulktTmt = BigInt("394")
		const uintIao0UK = BigInt("1995")
		const addressNaeW5Sx = accounts[3]
		const uintmPZ2IE5 = await TetherToken6xyMUk.setParams.call(uintyskQX3b, uintBh4qtv, {from: accounts[4]});
		const uinto9IaGcx = await TetherToken6xyMUk.setParams.call(uintulktTmt, uintqSqnntB, {from: "0x0000000000000000000000000000000000000001"});
		const addressYGVC0KZ = await TetherToken6xyMUk.transfer.call(addressNaeW5Sx, uintIao0UK, {from: accounts[3]});

		await expect(TetherToken6xyMUk.setParams.call(uintyskQX3b, uintBh4qtv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintky6XnIt = BigInt("164")
		const string9Np3Qg = "w8OJsszOwJhy5Vn0ypiAMixocyl3qQx8LHbSRXyEutpAHQHdoFIJqQIBITNnWMdQB6UoSINHcp7ROlisBU4"
		const stringmailUm = "jBmTBJdGNE28"
		const uintfwbs6Rk = BigInt("1187")
		const TetherTokenEbfiHFx = await TetherToken.new(uintky6XnIt, string9Np3Qg, stringmailUm, uintfwbs6Rk, {from: accounts[3]});
		const uintO7Yi62W = BigInt("1391")
		const uintc3QUFz = BigInt("833")
		const addressIOu2pb4 = accounts[3]
		const uintWjd5in = await TetherTokenEbfiHFx.issue.call(uintO7Yi62W, {from: accounts[0]});
		const addressKiFyQtD = await TetherTokenEbfiHFx.approve.call(addressIOu2pb4, uintc3QUFz, {from: accounts[2]});

		await expect(TetherTokenEbfiHFx.issue.call(uintO7Yi62W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintIlujqiJ = BigInt("2046")
		const stringEVAx3Fe = "2yz2tzeTUIEduQWZ94pGN2qu4mEnKwIypl2ePENL5vtfVbEcmRbku1KCXAQopp"
		const stringA5gAXq9 = "AavXy1"
		const uinte3OnwG8 = BigInt("377")
		const TetherTokensLmxWOa = await TetherToken.new(uintIlujqiJ, stringEVAx3Fe, stringA5gAXq9, uinte3OnwG8, {from: accounts[2]});
		const uintVjNLwyM = BigInt("831")
		const addressKckzUwF = accounts[1]
		const uintTUQNcAJ = BigInt("1065")
		const addressXmsnCpN = accounts[4]
		const uintkd1QVyC = BigInt("1544")
		const addressS9p4EHp = accounts[4]
		const addressRXxaJlN = accounts[3]
		const uintwwl9295 = BigInt("1920")
		const addressY8T3O4 = await TetherTokensLmxWOa.approve.call(addressKckzUwF, uintVjNLwyM, {from: accounts[2]});
		const addressveOd44O = await TetherTokensLmxWOa.approve.call(addressXmsnCpN, uintTUQNcAJ, {from: accounts[3]});
		const addressMAZJUv7 = await TetherTokensLmxWOa.transfer.call(addressS9p4EHp, uintkd1QVyC, {from: accounts[1]});
		const addressQewIlmd = await TetherTokensLmxWOa.deprecate.call(addressRXxaJlN, {from: accounts[2]});
		const uintd1uXxvS = await TetherTokensLmxWOa.issue.call(uintwwl9295, {from: accounts[3]});

		await expect(TetherTokensLmxWOa.transfer.call(addressS9p4EHp, uintkd1QVyC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintURkEVV = BigInt("1545")
		const stringyq4VuVl = "T9zRw0Xu7PkQvJ9VmQOWKFMrlOw"
		const stringOiIoNct = "dQdDkdj0Dah2FUGlyeEs1OWIoAfTUTcPGDnTsjpYI"
		const uintv1aSm84 = BigInt("1406")
		const TetherTokenqnWXao8 = await TetherToken.new(uintURkEVV, stringyq4VuVl, stringOiIoNct, uintv1aSm84, {from: accounts[4]});
		const uintNpX2Dbp = BigInt("44")
		const addressWZxNjFq = accounts[3]
		const uinthzg7yvD = BigInt("574")
		const uintZgdoRyL = BigInt("2015")
		const addressSK0cyIz = accounts[3]
		const address3Buz3S = await TetherTokenqnWXao8.approve.call(addressWZxNjFq, uintNpX2Dbp, {from: accounts[1]});
		const uintO8GqGXl = await TetherTokenqnWXao8.issue.call(uinthzg7yvD, {from: accounts[4]});
		const addressqHRnqGj = await TetherTokenqnWXao8.approve.call(addressSK0cyIz, uintZgdoRyL, {from: accounts[3]});
	});

	it('test for TetherToken', async () => {
		const uintA6sOUkQ = BigInt("1656")
		const stringmqA34dZ = "PWs2VjzP1rYOQGpipVT"
		const stringbxvBML7 = "1g97BX40vNzUCaibO7gnL"
		const uintNgfgYuC = BigInt("551")
		const TetherTokenzl0GPGC = await TetherToken.new(uintA6sOUkQ, stringmqA34dZ, stringbxvBML7, uintNgfgYuC, {from: "0x0000000000000000000000000000000000000001"});
		const addressaA60Sz1 = accounts[4]
		const addressBl3anr = accounts[1]
		const addressLGO9CTB = accounts[0]
		const uintnCNMpmf = BigInt("1962")
		const addresso56LT63 = accounts[2]
		const uintFKWLrBD = await TetherTokenzl0GPGC.balanceOf.call(addressaA60Sz1, {from: accounts[3]});
		const uintlyoHHXA = await TetherTokenzl0GPGC.allowance.call(addressLGO9CTB, addressBl3anr, {from: accounts[0]});
		const addressxXizL8H = await TetherTokenzl0GPGC.approve.call(addresso56LT63, uintnCNMpmf, {from: accounts[5]});
	});

	it('test for TetherToken', async () => {
		const uintGqqEP99 = BigInt("1545")
		const stringyq4VuVl = "T9zRw0Xu7PkQvJ9VmQOWKFMrlOw"
		const stringOiIoNct = "dQdDkdj0Dah2FUGlyeEs1OWIoAfTUTcPGDnTsjpYI"
		const uintcE88q4A = BigInt("1406")
		const TetherTokenqnWXao8 = await TetherToken.new(uintGqqEP99, stringyq4VuVl, stringOiIoNct, uintcE88q4A, {from: accounts[4]});
		const addressE3fMDgZ = accounts[2]
		const addressqKaC69a = accounts[0]
		const uintb1sib11 = BigInt("466")
		const addressxFWJMIR = accounts[0]
		const uintOUTFwyT = BigInt("301")
		const uintVBZFTt = BigInt("1668")
		const addressAWYXkzj = accounts[3]
		const uintE41wLrV = await TetherTokenqnWXao8.allowance.call(addressqKaC69a, addressE3fMDgZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressUEsBei5 = await TetherTokenqnWXao8.approve.call(addressxFWJMIR, uintb1sib11, {from: accounts[2]});
		const uintWWzD8H = await TetherTokenqnWXao8.setParams.call(uintVBZFTt, uintOUTFwyT, {from: accounts[4]});
		const addressrj33JOE = await TetherTokenqnWXao8.deprecate.call(addressAWYXkzj, {from: accounts[3]});

		assert.equal(uintE41wLrV, BigInt("0"))
		await expect(TetherTokenqnWXao8.setParams.call(uintVBZFTt, uintOUTFwyT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintnEN2kNJ = BigInt("315")
		const stringdHT39rO = "GzJyIBtEKLL3HHcdfWmxcKlfiG8wEz"
		const stringwmUBR6V = "wJXpSp6Sz1J9kGPlmuDJuJzcTePznl1P5ppU94Jl9"
		const uintln61RxJ = BigInt("1469")
		const TetherTokenlwc9q3H = await TetherToken.new(uintnEN2kNJ, stringdHT39rO, stringwmUBR6V, uintln61RxJ, {from: accounts[1]});
		const addressOhDqUZ2 = accounts[5]
		const addressLoYrGN = accounts[4]
		const addressN4Bkosk = accounts[3]
		const addressp57tngZ = accounts[1]
		const addressT5nBUH = await TetherTokenlwc9q3H.deprecate.call(addressOhDqUZ2, {from: accounts[1]});
		const uintQ4xkD0b = await TetherTokenlwc9q3H.balanceOf.call(addressLoYrGN, {from: accounts[4]});
		const uintgh7uCvx = await TetherTokenlwc9q3H.allowance.call(addressp57tngZ, addressN4Bkosk, {from: accounts[1]});

		assert.equal(uintQ4xkD0b, BigInt("0"))
		assert.equal(uintgh7uCvx, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uinth3JT5PO = BigInt("1545")
		const stringyq4VuVl = "T9zRw0Xu7PkQvJ9VmQOWKFMrlOw"
		const stringOiIoNct = "dQdDkdj0Dah2FUGlyeEs1OWIoAfTUTcPGDnTsjpYI"
		const uintb7fNKZx = BigInt("1406")
		const TetherTokenqnWXao8 = await TetherToken.new(uinth3JT5PO, stringyq4VuVl, stringOiIoNct, uintb7fNKZx, {from: accounts[4]});
		const uinta5vgur8 = BigInt("301")
		const uintsPQRmcM = BigInt("19")
		const addresstdTVoPG = accounts[2]
		const uintWWzD8H = await TetherTokenqnWXao8.setParams.call(uintsPQRmcM, uinta5vgur8, {from: accounts[4]});
		const uintzpvnNM4 = await TetherTokenqnWXao8.balanceOf.call(addresstdTVoPG, {from: accounts[2]});

		await expect(TetherTokenqnWXao8.setParams.call(uintsPQRmcM, uinta5vgur8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})