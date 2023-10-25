const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintMvf6xs = BigInt("340")
		const stringUKJJltd = "WD8EyrJkdmEl5YpqFwUp9d3AchiXKfw6vyAHKwhdfu9IxcYmagbkq4FS88XztoPBeBFdX7LaEWL8awxjm"
		const stringxwAFD3L = "X2"
		const uintWAMoxhn = BigInt("1688")
		const ANRXTokenkSSiB2V = await ANRXToken.new(uintMvf6xs, stringUKJJltd, stringxwAFD3L, uintWAMoxhn, {from: accounts[3]});
		const uintmMEwaOB = BigInt("569")
		const addressOAuZTpP = accounts[4]
		const uintXKD0FLy = BigInt("280")
		const addressm9CX09I = "0x0000000000000000000000000000000000000001"
		const boolwv1VzKq = await ANRXTokenkSSiB2V.transfer.call(addressOAuZTpP, uintmMEwaOB, {from: accounts[3]});
		const uintGaVtsc = await ANRXTokenkSSiB2V.issue.call(uintXKD0FLy, {from: accounts[4]});
		const addressn4GveFU = await ANRXTokenkSSiB2V.deprecate.call(addressm9CX09I, {from: accounts[5]});

		await expect(ANRXTokenkSSiB2V.transfer.call(addressOAuZTpP, uintmMEwaOB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintFfv9lEC = BigInt("1188")
		const stringyMHyYag = "eJuWtrFCvi6c"
		const stringUcPw5cu = "IOkPbq3WFQR6vh9RYxZMgzDcKFaMJMhsiIfbufEisfbvQu2DuDHqJsUEEbxryEeii3rmtBGiHCXAQmKydoM1B"
		const uintyPwxqrF = BigInt("1401")
		const ANRXTokenSRanzkw = await ANRXToken.new(uintFfv9lEC, stringyMHyYag, stringUcPw5cu, uintyPwxqrF, {from: accounts[5]});
		const addressJcRyBs = accounts[3]
		const uintddOn3ix = BigInt("1974")
		const addresswObEr5g = accounts[0]
		const addressIcbH1XO = accounts[4]
		const uintfXVBmbC = await ANRXTokenSRanzkw.balanceOf.call(addressJcRyBs, {from: accounts[2]});
		const boolBACCOsU = await ANRXTokenSRanzkw.approve.call(addresswObEr5g, uintddOn3ix, {from: "0x0000000000000000000000000000000000000001"});
		const addressxlEb4rM = await ANRXTokenSRanzkw.deprecate.call(addressIcbH1XO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBACCOsU, true)
		assert.equal(uintfXVBmbC, BigInt("0"))
		await expect(ANRXTokenSRanzkw.deprecate.call(addressIcbH1XO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintsL8vjvD = BigInt("44")
		const stringmdjiD0c = "emXvTYEbU5DHxHEvT8vhv4mVIjqnNTKdgDfp8cCP4bkPrBbgrwgTXnRADDTvI"
		const stringY04iTJ3 = "pMncGs"
		const uintes2MVCa = BigInt("785")
		const ANRXTokencEhigcd = await ANRXToken.new(uintsL8vjvD, stringmdjiD0c, stringY04iTJ3, uintes2MVCa, {from: accounts[0]});
		const uintXDx1hDn = BigInt("823")
		const uintp4zL77P = BigInt("2036")
		const addressea8YaxQ = accounts[3]
		const addressDlnBqdS = accounts[0]
		const uintXDdTvop = BigInt("2013")
		const addressSmYWkUF = "0x0000000000000000000000000000000000000001"
		const addressisqBwbO = accounts[4]
		const uintzN8dEAW = BigInt("247")
		const addressZY9ZQej = "0x0000000000000000000000000000000000000001"
		const uintag15UXt = await ANRXTokencEhigcd.issue.call(uintXDx1hDn, {from: accounts[0]});
		const boolwuCbGRU = await ANRXTokencEhigcd.transferFrom.call(addressDlnBqdS, addressea8YaxQ, uintp4zL77P, {from: accounts[3]});
		const bool2L5EIp = await ANRXTokencEhigcd.transferFrom.call(addressisqBwbO, addressSmYWkUF, uintXDdTvop, {from: accounts[1]});
		const boolw4BuIe = await ANRXTokencEhigcd.approve.call(addressZY9ZQej, uintzN8dEAW, {from: accounts[1]});

		await expect(ANRXTokencEhigcd.transferFrom.call(addressDlnBqdS, addressea8YaxQ, uintp4zL77P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintHWnor5f = BigInt("1872")
		const stringF9VPIk1 = "tyRtnzdTYx3ssUpYWBXnh1MB3CMjCUBO5PvY6jRSvLUKQRz57HqAK5lhYZy"
		const stringKUlVHVq = "PP7kVpYriba7ljqMnNn86wGCYfVxASHbYStJPuStcE5KMxchKJIZzEIykIpgQsgNQH8fVA9R6VF9NIz3nesmjgyE01SPK6r"
		const uintE58csU = BigInt("1287")
		const ANRXTokennHsqyv = await ANRXToken.new(uintHWnor5f, stringF9VPIk1, stringKUlVHVq, uintE58csU, {from: accounts[0]});
		const uintCBFTDDA = BigInt("407")
		const addressuwioSSC = accounts[1]
		const addressu254J6Y = accounts[3]
		const addressib9JUbG = accounts[3]
		const uint2k1q3Z = BigInt("1660")
		const uintOxqWmse = await ANRXTokennHsqyv.totalSupply.call({from: accounts[3]});
		const booleFQYuXe = await ANRXTokennHsqyv.approve.call(addressuwioSSC, uintCBFTDDA, {from: accounts[1]});
		const uintszrWDdS = await ANRXTokennHsqyv.balanceOf.call(addressu254J6Y, {from: accounts[4]});
		const addresssYp0qQs = await ANRXTokennHsqyv.deprecate.call(addressib9JUbG, {from: accounts[5]});
		const uintaBCXZdG = await ANRXTokennHsqyv.issue.call(uint2k1q3Z, {from: accounts[0]});

		assert.equal(booleFQYuXe, true)
		assert.equal(uintOxqWmse, BigInt("1872"))
		assert.equal(uintszrWDdS, BigInt("0"))
		await expect(ANRXTokennHsqyv.deprecate.call(addressib9JUbG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintF5dZE0Q = BigInt("1181")
		const stringlNUBW8 = "3yROY1zQe49knNUrBxMD4bxiSdxz3vUfhTo2NgKOhln7uVCa2Ux"
		const stringdMQFxUX = "Hyp3tjgnT1XbL8ZXMGtQMBcIPS6yyAM6uMLlvRwLZTUevnkKWxqpfzLCwjzoH1y6BXdUYw"
		const uintGsOo0M0 = BigInt("302")
		const ANRXTokendAbAWAD = await ANRXToken.new(uintF5dZE0Q, stringlNUBW8, stringdMQFxUX, uintGsOo0M0, {from: accounts[1]});
		const addressIgxjxa = accounts[2]
		const addressCvGH2Z3 = accounts[1]
		const uintSQFMPyF = BigInt("1150")
		const uintdQ6ra8 = BigInt("359")
		const addressJ7BU1vP = accounts[1]
		const uintlOkLtFL = await ANRXTokendAbAWAD.allowance.call(addressCvGH2Z3, addressIgxjxa, {from: accounts[0]});
		const uintONCyTBm = await ANRXTokendAbAWAD.issue.call(uintSQFMPyF, {from: accounts[0]});
		const boolRuRB9i0 = await ANRXTokendAbAWAD.approve.call(addressJ7BU1vP, uintdQ6ra8, {from: accounts[3]});

		assert.equal(uintlOkLtFL, BigInt("0"))
		await expect(ANRXTokendAbAWAD.issue.call(uintSQFMPyF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintzxsqxf = BigInt("1312")
		const stringZkOL8cp = "MGJ3MhgeKaKCu9PeGIaXA6KatTLMex3vR6ClN5aCWhuU7MBE2j2lz9nyW2Rn6xsJA73karW3cb9gkTgh5kaKh6H39"
		const stringErdPRvM = "8Vc015eUvJV1YOKuk1V72A28EkIQxdwUSgAJ9MP1RA"
		const uintFqyZhoY = BigInt("1623")
		const ANRXTokenrgcI2q3 = await ANRXToken.new(uintzxsqxf, stringZkOL8cp, stringErdPRvM, uintFqyZhoY, {from: "0x0000000000000000000000000000000000000001"});
		const uintusUGE8T = BigInt("1368")
		const addressKJnTn9 = accounts[1]
		const addressltaeHrJ = accounts[2]
		const addressFp9RaKN = accounts[4]
		const addressP1vkVyj = accounts[5]
		const uintJstvur = BigInt("1043")
		const addressZBBCdVe = accounts[2]
		const uintEczWgbU = await ANRXTokenrgcI2q3.redeem.call(uintusUGE8T, {from: accounts[0]});
		const addresspv4D6O = await ANRXTokenrgcI2q3.deprecate.call(addressKJnTn9, {from: accounts[2]});
		const addressF7YEvUX = await ANRXTokenrgcI2q3.deprecate.call(addressltaeHrJ, {from: accounts[2]});
		const uintRfFV9Cv = await ANRXTokenrgcI2q3.allowance.call(addressP1vkVyj, addressFp9RaKN, {from: accounts[4]});
		const boolLH8tfaQ = await ANRXTokenrgcI2q3.approve.call(addressZBBCdVe, uintJstvur, {from: accounts[3]});
	});

	it('test for ANRXToken', async () => {
		const uintOZzspN = BigInt("1181")
		const stringlNUBW8 = "3yROY1zQe49knNUrBxMD4bxiSdxz3vUfhTo2NgKOhln7uVCa2Ux"
		const stringdMQFxUX = "Hyp3tjgnT1XbL8ZXMGtQMBcIPS6yyAM6uMLlvRwLZTUevnkKWxqpfzLCwjzoH1y6BXdUYw"
		const uintus63u0G = BigInt("302")
		const ANRXTokendAbAWAD = await ANRXToken.new(uintOZzspN, stringlNUBW8, stringdMQFxUX, uintus63u0G, {from: accounts[1]});
		const addressO6hFBOb = accounts[3]
		const addressthXP6oW = accounts[1]
		const uintILdmWJH = BigInt("359")
		const addressFTnbZDC = accounts[1]
		const addressLya0cf = accounts[1]
		const uintlOkLtFL = await ANRXTokendAbAWAD.allowance.call(addressthXP6oW, addressO6hFBOb, {from: accounts[0]});
		const boolRuRB9i0 = await ANRXTokendAbAWAD.approve.call(addressFTnbZDC, uintILdmWJH, {from: accounts[3]});
		const addressKL8L3bF = await ANRXTokendAbAWAD.deprecate.call(addressLya0cf, {from: accounts[1]});
		const uintBuvpIVp = await ANRXTokendAbAWAD.totalSupply.call({from: accounts[3]});

		assert.equal(boolRuRB9i0, true)
		assert.equal(uintBuvpIVp, BigInt("1181"))
		assert.equal(uintlOkLtFL, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintMaBt0A = BigInt("1228")
		const stringDqaw1l = "8mJpJpdqWGQU4QnLoIuGdcnAYPFzRh5EwLI"
		const stringTa0yAws = "s9rFAO6SmIyWNzRTvRK00yVv175toLljH80OrclHloXqTovoRFALyEwSTG7poajQ2jA"
		const uintCGK7E1t = BigInt("1526")
		const ANRXTokenqwGnT6d = await ANRXToken.new(uintMaBt0A, stringDqaw1l, stringTa0yAws, uintCGK7E1t, {from: accounts[4]});
		const addressM38vmi = accounts[1]
		const uintjD7smfw = BigInt("434")
		const addressd00LroA = accounts[3]
		const addresshUKRct8 = await ANRXTokenqwGnT6d.deprecate.call(addressM38vmi, {from: accounts[4]});
		const uintqsBeyhg = await ANRXTokenqwGnT6d.redeem.call(uintjD7smfw, {from: accounts[4]});
		const uintXWuHOX5 = await ANRXTokenqwGnT6d.balanceOf.call(addressd00LroA, {from: accounts[0]});

		assert.equal(uintXWuHOX5, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintdDwObBl = BigInt("44")
		const stringmdjiD0c = "emXvTYEbU5DHxHEvT8vhv4mVIjqnNTKdgDfp8cCP4bkPrBbgrwgTXnRADDTvI"
		const stringY04iTJ3 = "pMncGs"
		const uintNusbPLq = BigInt("785")
		const ANRXTokencEhigcd = await ANRXToken.new(uintdDwObBl, stringmdjiD0c, stringY04iTJ3, uintNusbPLq, {from: accounts[0]});
		const uintPvp1DPD = BigInt("1989")
		const uintJBbctBM = BigInt("252")
		const uintf9MaCH3 = BigInt("1295")
		const addressMQddv62 = accounts[4]
		const uintoJXV0lP = BigInt("1026")
		const addressm8nS21E = accounts[5]
		const addressUH0p380 = accounts[2]
		const uintr7SlW4Y = BigInt("1997")
		const addressIOQyKEL = "0x0000000000000000000000000000000000000001"
		const addresshKsNXd8 = accounts[4]
		const uintxmFLAip = await ANRXTokencEhigcd.setParams.call(uintJBbctBM, uintPvp1DPD, {from: accounts[0]});
		const bools79ZZqo = await ANRXTokencEhigcd.approve.call(addressMQddv62, uintf9MaCH3, {from: accounts[3]});
		const boolJYf1nu = await ANRXTokencEhigcd.transferFrom.call(addressUH0p380, addressm8nS21E, uintoJXV0lP, {from: accounts[1]});
		const bool2L5EIp = await ANRXTokencEhigcd.transferFrom.call(addresshKsNXd8, addressIOQyKEL, uintr7SlW4Y, {from: accounts[1]});

		await expect(ANRXTokencEhigcd.setParams.call(uintJBbctBM, uintPvp1DPD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})