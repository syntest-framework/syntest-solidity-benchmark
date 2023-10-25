const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintQpa06W = BigInt("22")
		const stringryVsNaa = "cIM9Si7D7PIqDFON77cX"
		const stringCuTC9GM = "7EcIJ8MfNuiw1Qw9iunXy5LegxAYE5zUaEBCniXRCYJIBrQBnOFVeVcqeqOco1LFaCPP"
		const uintn8IaRMT = BigInt("1205")
		const TetherTokenpa0o4c = await TetherToken.new(uintQpa06W, stringryVsNaa, stringCuTC9GM, uintn8IaRMT, {from: accounts[3]});
		const uintGAtAIQ = BigInt("519")
		const uintgWqdbLr = BigInt("1215")
		const uintCnyWzqI = BigInt("1024")
		const addressnfo0LDv = accounts[3]
		const uintFyPbdF = await TetherTokenpa0o4c.redeem.call(uintGAtAIQ, {from: accounts[1]});
		const uintLFvRdqT = await TetherTokenpa0o4c.issue.call(uintgWqdbLr, {from: accounts[1]});
		const uintH7RfIAH = await TetherTokenpa0o4c.issue.call(uintCnyWzqI, {from: accounts[3]});
		const uintkUU0cHt = await TetherTokenpa0o4c.balanceOf.call(addressnfo0LDv, {from: accounts[5]});

		await expect(TetherTokenpa0o4c.redeem.call(uintGAtAIQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintWeIZ5R = BigInt("1724")
		const stringttwkU5b = "40EO1257gVRewOmfWW8E52LTcaSkgcU1855YE6bagMUcwKNYNHFAagVtzLoXZYCO"
		const stringJl6Vn5n = "7X3IrlHCfanMHYrcZseCCW39JvYZwtLqEdDqhkwo0cH33U6fbFLxPo2Q46ebhRtEtUcsHejg9jm3kI9xsfe4"
		const uintexeFWLo = BigInt("1226")
		const TetherTokenyAxwGka = await TetherToken.new(uintWeIZ5R, stringttwkU5b, stringJl6Vn5n, uintexeFWLo, {from: accounts[3]});
		const addressRMMvE9u = accounts[2]
		const addressXFtBf09 = accounts[0]
		const uintL8G2G5C = BigInt("1642")
		const uintPbguoa5 = BigInt("1614")
		const addresssnThvgB = accounts[4]
		const addressEs7JGOX = accounts[1]
		const uintoqWBOD9 = BigInt("947")
		const addresstzPz2DY = accounts[3]
		const uintNoir9dt = await TetherTokenyAxwGka.balanceOf.call(addressRMMvE9u, {from: accounts[1]});
		const uintc5ZAcJp = await TetherTokenyAxwGka.balanceOf.call(addressXFtBf09, {from: accounts[3]});
		const uintd6Tqc6k = await TetherTokenyAxwGka.redeem.call(uintL8G2G5C, {from: "0x0000000000000000000000000000000000000001"});
		const addressT4iK78l = await TetherTokenyAxwGka.transferFrom.call(addressEs7JGOX, addresssnThvgB, uintPbguoa5, {from: accounts[1]});
		const address997Dyg = await TetherTokenyAxwGka.approve.call(addresstzPz2DY, uintoqWBOD9, {from: accounts[3]});

		assert.equal(uintNoir9dt, BigInt("0"))
		assert.equal(uintc5ZAcJp, BigInt("0"))
		await expect(TetherTokenyAxwGka.redeem.call(uintL8G2G5C, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinttosFPm = BigInt("497")
		const stringzmnCBio = "DBzgB9sHcgsYGxvJx1g9iQ3n4Kk"
		const stringRsxB1L = "eFK1sQLx1VPOjfpLaXiIVnJAWTV"
		const uintUs1j97I = BigInt("371")
		const TetherTokenYGnkcJL = await TetherToken.new(uinttosFPm, stringzmnCBio, stringRsxB1L, uintUs1j97I, {from: "0x0000000000000000000000000000000000000001"});
		const uintfQ9OkSX = BigInt("822")
		const addressmgyzFex = accounts[5]
		const uintDumgWJ = BigInt("1430")
		const addressA35Dyxh = await TetherTokenYGnkcJL.approve.call(addressmgyzFex, uintfQ9OkSX, {from: accounts[3]});
		const uintbCfl9dm = await TetherTokenYGnkcJL.totalSupply.call({from: accounts[5]});
		const uintEvDFsiW = await TetherTokenYGnkcJL.issue.call(uintDumgWJ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TetherToken', async () => {
		const uintWmUoAod = BigInt("1650")
		const stringT0d5oqw = "1IuehBzDxc7N1Ig3ZNfkmjbQ3hKdTRcfpFA7CjKEEr2wDwJhfKqZflkbbBSMywzJ2GVcfhU8nb1c4Kne2P"
		const stringcdHdmXN = "lH"
		const uintEsVvGvW = BigInt("1847")
		const TetherTokenYbBYcrG = await TetherToken.new(uintWmUoAod, stringT0d5oqw, stringcdHdmXN, uintEsVvGvW, {from: accounts[4]});
		const uintmHN1ieR = BigInt("219")
		const addresszVIJoVD = accounts[1]
		const uintVjWBWB9 = BigInt("1315")
		const uintxwugxUt = BigInt("1349")
		const uintPvGhUQ = BigInt("1271")
		const addressB8RzPM2 = accounts[1]
		const addresswFbMJ8 = accounts[2]
		const addressJQjZMTo = accounts[0]
		const addressUWbfJxd = accounts[2]
		const addressZsXdQX = await TetherTokenYbBYcrG.approve.call(addresszVIJoVD, uintmHN1ieR, {from: "0x0000000000000000000000000000000000000001"});
		const uintmKQf4X9 = await TetherTokenYbBYcrG.setParams.call(uintxwugxUt, uintVjWBWB9, {from: accounts[4]});
		const addressgTexZNb = await TetherTokenYbBYcrG.transfer.call(addressB8RzPM2, uintPvGhUQ, {from: accounts[3]});
		const uintQA8p7n = await TetherTokenYbBYcrG.balanceOf.call(addresswFbMJ8, {from: accounts[0]});
		const uintRfGSN2m = await TetherTokenYbBYcrG.allowance.call(addressUWbfJxd, addressJQjZMTo, {from: accounts[3]});
		const uintbgfZBZV = await TetherTokenYbBYcrG.totalSupply.call({from: accounts[1]});

		await expect(TetherTokenYbBYcrG.setParams.call(uintxwugxUt, uintVjWBWB9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintvFpM5Kh = BigInt("1589")
		const stringmnhn3aQ = "Y7KSFcujJYJBBdaWmEasAhHmEL67WEMQVJoGzvRYoZ3snzOeHQhUFAtYhChqrV5Xs"
		const stringmce2hCI = "8fVJb8fXCBwqBx88Vvdixy2Wc9mffog9NUCzwYqkIj6cQTCBeUdqQRs4QCE4nNwjPPKqY5W3g2G6nBydXYoLUpjMHdPv24DfXw"
		const uintsNxmEfh = BigInt("217")
		const TetherTokenCKmLngq = await TetherToken.new(uintvFpM5Kh, stringmnhn3aQ, stringmce2hCI, uintsNxmEfh, {from: accounts[2]});
		const uintYGdU4Nt = BigInt("1243")
		const uintlkbmyZX = BigInt("332")
		const uintAUnC8K4 = BigInt("877")
		const addresscxy7nzY = accounts[4]
		const uintYDUYbOu = BigInt("1074")
		const uintG3JxbsT = await TetherTokenCKmLngq.issue.call(uintYGdU4Nt, {from: accounts[0]});
		const uintIkIkDNA = await TetherTokenCKmLngq.setParams.call(uintAUnC8K4, uintlkbmyZX, {from: accounts[0]});
		const uintpFEZxY2 = await TetherTokenCKmLngq.balanceOf.call(addresscxy7nzY, {from: accounts[2]});
		const uintvNSKUa = await TetherTokenCKmLngq.redeem.call(uintYDUYbOu, {from: accounts[0]});

		await expect(TetherTokenCKmLngq.issue.call(uintYGdU4Nt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintnxHPVY = BigInt("1591")
		const stringt7PjNwe = "OFF6BfOjLeH9bd7nFLHcIgGHebxgwciOjxAjciMP5gCqDV6p0zjw88h9lhd1UevFk7Pn78btex"
		const stringPZz2Chx = "5why0S6LlVwDrvDjm2XrZI65SGKmXoQa5NYQ1uY4bEnv2z1JPXbZ1x59CwwHduFyinkEaa"
		const uintxOWln9a = BigInt("1662")
		const TetherTokenwKVPQr4 = await TetherToken.new(uintnxHPVY, stringt7PjNwe, stringPZz2Chx, uintxOWln9a, {from: accounts[4]});
		const addressG2ZI8Qs = accounts[4]
		const addressKJ8iVzK = "0x0000000000000000000000000000000000000001"
		const addressphIZ1p6 = accounts[3]
		const uintV96DziE = BigInt("1788")
		const uintnxoIjA3 = BigInt("932")
		const uintgYc9s8P = BigInt("308")
		const uintrFtbaVw = BigInt("1583")
		const uintBzKTK1U = await TetherTokenwKVPQr4.balanceOf.call(addressG2ZI8Qs, {from: accounts[0]});
		const uintT7LxpeY = await TetherTokenwKVPQr4.allowance.call(addressphIZ1p6, addressKJ8iVzK, {from: accounts[3]});
		const uinthyfdd3x = await TetherTokenwKVPQr4.totalSupply.call({from: accounts[2]});
		const uintLIIrIvC = await TetherTokenwKVPQr4.redeem.call(uintV96DziE, {from: accounts[5]});
		const uintyVCUpEv = await TetherTokenwKVPQr4.setParams.call(uintgYc9s8P, uintnxoIjA3, {from: accounts[2]});
		const uintP4cc4QF = await TetherTokenwKVPQr4.issue.call(uintrFtbaVw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintBzKTK1U, BigInt("1591"))
		assert.equal(uintT7LxpeY, BigInt("0"))
		assert.equal(uinthyfdd3x, BigInt("1591"))
		await expect(TetherTokenwKVPQr4.redeem.call(uintV96DziE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintZ3bzqWv = BigInt("1591")
		const stringt7PjNwe = "OFF6BfOjLeH9bd7nFLHcIgGHebxgwciOjxAjciMP5gCqDV6p0zjw88h9lhd1UevFk7Pn78btex"
		const stringPZz2Chx = "5why0S6LlVwDrvDjm2XrZI65SGKmXoQa5NYQ1uY4bEnv2z1JPXbZ1x59CwwHduFyinkEaa"
		const uintHjVhid = BigInt("1662")
		const TetherTokenwKVPQr4 = await TetherToken.new(uintZ3bzqWv, stringt7PjNwe, stringPZz2Chx, uintHjVhid, {from: accounts[4]});
		const addressrKiHuyY = accounts[4]
		const addressRYMDEY4 = accounts[1]
		const addressQ2xk6qr = "0x0000000000000000000000000000000000000001"
		const addressYr1V6F = accounts[3]
		const uintG3YsoJv = BigInt("1788")
		const uintLoGxwQg = BigInt("932")
		const uintKPfrzFN = BigInt("308")
		const uintT4X8KRi = BigInt("1583")
		const uintBzKTK1U = await TetherTokenwKVPQr4.balanceOf.call(addressrKiHuyY, {from: accounts[0]});
		const addressIAfV53q = await TetherTokenwKVPQr4.deprecate.call(addressRYMDEY4, {from: accounts[0]});
		const uintT7LxpeY = await TetherTokenwKVPQr4.allowance.call(addressYr1V6F, addressQ2xk6qr, {from: accounts[3]});
		const uinthyfdd3x = await TetherTokenwKVPQr4.totalSupply.call({from: accounts[2]});
		const uintLIIrIvC = await TetherTokenwKVPQr4.redeem.call(uintG3YsoJv, {from: accounts[5]});
		const uintyVCUpEv = await TetherTokenwKVPQr4.setParams.call(uintKPfrzFN, uintLoGxwQg, {from: accounts[2]});
		const uintP4cc4QF = await TetherTokenwKVPQr4.issue.call(uintT4X8KRi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintBzKTK1U, BigInt("1591"))
		await expect(TetherTokenwKVPQr4.deprecate.call(addressRYMDEY4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinteKlzXC = BigInt("1724")
		const stringttwkU5b = "40EO1257gVRewOmfWW8E52LTcaSkgcU1855YE6bagMUcwKNYNHFAagVtzLoXZYCO"
		const stringJl6Vn5n = "7X3IrlHCfanMHYrcZseCCW39JvYZwtLqEdDqhkwo0cH33U6fbFLxPo2Q46ebhRtEtUcsHejg9jm3kI9xsfe4"
		const uintb49jD6O = BigInt("1226")
		const TetherTokenyAxwGka = await TetherToken.new(uinteKlzXC, stringttwkU5b, stringJl6Vn5n, uintb49jD6O, {from: accounts[3]});
		const addressqNSEjh = accounts[2]
		const uintDwHWhp = BigInt("502")
		const addressBpaZzgf = accounts[3]
		const addressHJPp9qj = accounts[4]
		const addresstc1H55A = accounts[0]
		const uintDyMSKyW = BigInt("1642")
		const uint7G1Id8 = BigInt("1614")
		const addressOiSGt7U = accounts[5]
		const addresstZX5nO = accounts[1]
		const uintCwJqasG = BigInt("947")
		const addressYdi9ong = accounts[3]
		const uintNoir9dt = await TetherTokenyAxwGka.balanceOf.call(addressqNSEjh, {from: accounts[1]});
		const address6sLlvx = await TetherTokenyAxwGka.transferFrom.call(addressHJPp9qj, addressBpaZzgf, uintDwHWhp, {from: accounts[3]});
		const uintc5ZAcJp = await TetherTokenyAxwGka.balanceOf.call(addresstc1H55A, {from: accounts[3]});
		const uintd6Tqc6k = await TetherTokenyAxwGka.redeem.call(uintDyMSKyW, {from: "0x0000000000000000000000000000000000000001"});
		const addressT4iK78l = await TetherTokenyAxwGka.transferFrom.call(addresstZX5nO, addressOiSGt7U, uint7G1Id8, {from: accounts[1]});
		const address997Dyg = await TetherTokenyAxwGka.approve.call(addressYdi9ong, uintCwJqasG, {from: accounts[3]});

		assert.equal(uintNoir9dt, BigInt("0"))
		await expect(TetherTokenyAxwGka.transferFrom.call(addressHJPp9qj, addressBpaZzgf, uintDwHWhp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintOtikRU = BigInt("1724")
		const stringttwkU5b = "40EO1257gVRewOmfWW8E52LTcaSkgcU1855YE6bagMUcwKNYNHFAagVtzLoXZYCO"
		const stringJl6Vn5n = "7X3IrlHCfanMHYrcZseCCW39JvYZwtLqEdDqhkwo0cH33U6fbFLxPo2Q46ebhRtEtUcsHejg9jm3kI9xsfe4"
		const uintfDMK3WU = BigInt("1226")
		const TetherTokenyAxwGka = await TetherToken.new(uintOtikRU, stringttwkU5b, stringJl6Vn5n, uintfDMK3WU, {from: accounts[3]});
		const uintnfWTTY = BigInt("1225")
		const addresspkdvYgd = accounts[1]
		const addressP3fC5C = "0x0000000000000000000000000000000000000001"
		const addressCAWbfq3 = accounts[0]
		const addressQ8EZF9T = accounts[2]
		const addressxZyO5tm = accounts[0]
		const uintTdreg41 = BigInt("1614")
		const addressJf058W3 = accounts[4]
		const addresstJ6NjUJ = accounts[1]
		const addressXDxBDyY = await TetherTokenyAxwGka.transfer.call(addresspkdvYgd, uintnfWTTY, {from: accounts[4]});
		const uinthjn7oD8 = await TetherTokenyAxwGka.allowance.call(addressCAWbfq3, addressP3fC5C, {from: accounts[4]});
		const uintNoir9dt = await TetherTokenyAxwGka.balanceOf.call(addressQ8EZF9T, {from: accounts[1]});
		const uintc5ZAcJp = await TetherTokenyAxwGka.balanceOf.call(addressxZyO5tm, {from: accounts[3]});
		const addressT4iK78l = await TetherTokenyAxwGka.transferFrom.call(addresstJ6NjUJ, addressJf058W3, uintTdreg41, {from: accounts[1]});

		await expect(TetherTokenyAxwGka.transfer.call(addresspkdvYgd, uintnfWTTY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})