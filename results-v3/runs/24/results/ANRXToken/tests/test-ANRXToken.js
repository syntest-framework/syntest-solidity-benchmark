const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintvQXWEsY = BigInt("1101")
		const stringpJV4KHV = "djNW9gIQAt8Ji6gCzq7kL"
		const stringdeyhYoQ = "jCwOOpl77W"
		const uintcAxoEPd = BigInt("763")
		const ANRXTokenM0rI1gT = await ANRXToken.new(uintvQXWEsY, stringpJV4KHV, stringdeyhYoQ, uintcAxoEPd, {from: accounts[4]});
		const addressPprLbVB = "0x0000000000000000000000000000000000000001"
		const uintqgSPZev = BigInt("102")
		const addressSm380xN = accounts[3]
		const addressgacqmgg = await ANRXTokenM0rI1gT.deprecate.call(addressPprLbVB, {from: accounts[0]});
		const booltfPKnBt = await ANRXTokenM0rI1gT.transfer.call(addressSm380xN, uintqgSPZev, {from: accounts[4]});

		await expect(ANRXTokenM0rI1gT.deprecate.call(addressPprLbVB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintuaqmau = BigInt("552")
		const stringE5Z3n3O = "gp0HZmhCgbBXvbRHXTk3chlMkknaAPC1cV08byhWHsXbYx0YqnyFQH7YkwJc5rgVwrrFvsYUUmNgMQj4wFrSrDHsqVVCK"
		const stringsqpjd5T = "gFgRoCYX4LExrtryoIDcewAmNouHdumUYQkZehLuQUlp1wVtP3PfXZE7ikJL55Ris3yMaOoJw90PfDAX3DxX5A9BcS7aL"
		const uintE6ZQ5UI = BigInt("1134")
		const ANRXTokenwc41w9Q = await ANRXToken.new(uintuaqmau, stringE5Z3n3O, stringsqpjd5T, uintE6ZQ5UI, {from: "0x0000000000000000000000000000000000000001"});
		const uintr2TnkEe = BigInt("11")
		const uintcsiKOEQ = await ANRXTokenwc41w9Q.totalSupply.call({from: accounts[5]});
		const uintTSWae9Q = await ANRXTokenwc41w9Q.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintoISgfbv = await ANRXTokenwc41w9Q.issue.call(uintr2TnkEe, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ANRXToken', async () => {
		const uintx4PZOMw = BigInt("111")
		const stringuS9kK79 = "3CSfxyA9DCzeaiHXq1PANLg64oFAWSncZqoweVDTWWLCJWWoMQJgENm5Pz5osd9BuIDI9sWi0cbImTXSsSrEKfP9qiAzxJwFS"
		const stringkKiOqK = "umLUNm81dpCvgaM7VHDg1fkt"
		const uinty3D4bbw = BigInt("1897")
		const ANRXTokenPNHqWyV = await ANRXToken.new(uintx4PZOMw, stringuS9kK79, stringkKiOqK, uinty3D4bbw, {from: accounts[0]});
		const uinttmsLBU0 = BigInt("1103")
		const addressMvHt3I4 = accounts[4]
		const uinth1tukt = BigInt("2031")
		const boollQUAjgo = await ANRXTokenPNHqWyV.transfer.call(addressMvHt3I4, uinttmsLBU0, {from: accounts[5]});
		const uintO0v4jQ = await ANRXTokenPNHqWyV.issue.call(uinth1tukt, {from: accounts[4]});

		await expect(ANRXTokenPNHqWyV.transfer.call(addressMvHt3I4, uinttmsLBU0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintyOl4Vas = BigInt("1385")
		const stringuJIdGu3 = "1qXgJAUGpF9C08VEwcnQ1uUxIBjHH9MjpCRDfHc"
		const stringx0j1Rjs = "hRvvO6NSSIunvOCisD0"
		const uintNmnqyKS = BigInt("1200")
		const ANRXTokenm5SAyB0 = await ANRXToken.new(uintyOl4Vas, stringuJIdGu3, stringx0j1Rjs, uintNmnqyKS, {from: accounts[4]});
		const uintfklp5PK = BigInt("962")
		const uintupoKxg4 = BigInt("1706")
		const addressaOqGfXs = accounts[4]
		const addressB587jGa = accounts[1]
		const uintkRaf301 = BigInt("1264")
		const addresskyN9Q03 = accounts[3]
		const uintqxId8P7 = await ANRXTokenm5SAyB0.redeem.call(uintfklp5PK, {from: accounts[4]});
		const boolS2dkrUv = await ANRXTokenm5SAyB0.transferFrom.call(addressB587jGa, addressaOqGfXs, uintupoKxg4, {from: accounts[4]});
		const bools9UClTk = await ANRXTokenm5SAyB0.approve.call(addresskyN9Q03, uintkRaf301, {from: accounts[2]});
		const uintvQk9TuR = await ANRXTokenm5SAyB0.totalSupply.call({from: accounts[0]});

		await expect(ANRXTokenm5SAyB0.transferFrom.call(addressB587jGa, addressaOqGfXs, uintupoKxg4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintW4V7uJ2 = BigInt("878")
		const stringFXc5THx = "5WGGoxXAECR"
		const stringpPu0qr1 = "cBFpW0XeTqiOKIklLeN6TliFHUh12lJe4glkY0526WdMLa3yeUq0r3nOEq9oMLvpik9lXtZx806Dsg"
		const uintfokV3mO = BigInt("557")
		const ANRXTokenXYpcfc8 = await ANRXToken.new(uintW4V7uJ2, stringFXc5THx, stringpPu0qr1, uintfokV3mO, {from: accounts[2]});
		const uintjbTZB6Q = BigInt("253")
		const addressZn3YceB = accounts[3]
		const addresskwBOlea = accounts[5]
		const addressTUPfQ6e = accounts[2]
		const uintMvtrBfR = BigInt("1092")
		const addressR4JYbAe = accounts[0]
		const boolc13q1Rt = await ANRXTokenXYpcfc8.approve.call(addressZn3YceB, uintjbTZB6Q, {from: accounts[2]});
		const addressKgb0zug = await ANRXTokenXYpcfc8.deprecate.call(addresskwBOlea, {from: accounts[0]});
		const uintzSZ206z = await ANRXTokenXYpcfc8.balanceOf.call(addressTUPfQ6e, {from: accounts[2]});
		const uintPJdA1z6 = await ANRXTokenXYpcfc8.issue.call(uintMvtrBfR, {from: accounts[1]});
		const uintvMUUN1H = await ANRXTokenXYpcfc8.totalSupply.call({from: accounts[3]});
		const addressCVVawF1 = await ANRXTokenXYpcfc8.deprecate.call(addressR4JYbAe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolc13q1Rt, true)
		await expect(ANRXTokenXYpcfc8.deprecate.call(addresskwBOlea, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintdAvsrKE = BigInt("421")
		const stringiT1Ufjk = "wVdeK3q2vvnx5LkLXOYDOnosmTNw2RAZ1STBoZ9sflKBSmthgyvysH1AB2NMcxUlmljekkS8qXt"
		const stringmjUcGRz = "zAUDv0BX2f4zU1qOe"
		const uintn5PmjqK = BigInt("1825")
		const ANRXTokeniXx2zW9 = await ANRXToken.new(uintdAvsrKE, stringiT1Ufjk, stringmjUcGRz, uintn5PmjqK, {from: accounts[0]});
		const uintk4xh1Z = BigInt("956")
		const addressbdGxBb9 = accounts[2]
		const boolBiqRlQV = await ANRXTokeniXx2zW9.approve.call(addressbdGxBb9, uintk4xh1Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintq4XqLDL = await ANRXTokeniXx2zW9.totalSupply.call({from: accounts[0]});

		assert.equal(boolBiqRlQV, true)
		assert.equal(uintq4XqLDL, BigInt("421"))
	});

	it('test for ANRXToken', async () => {
		const uintG4uJOGs = BigInt("281")
		const stringmSckA6 = "k2xY4uk9E9UdM4KTKzokIMj9f2W78G2WmcNix"
		const stringdfO9Yvl = "IpeLdXXj9ucqhYtxwyWlaapbG41ose7EN1mzsBhJw7ft4RdD6l53C"
		const uintM9Npgv = BigInt("207")
		const ANRXTokenr0piT1y = await ANRXToken.new(uintG4uJOGs, stringmSckA6, stringdfO9Yvl, uintM9Npgv, {from: accounts[3]});
		const addressD5DJbwP = accounts[2]
		const addressjpfH1Ev = accounts[3]
		const uintiFoDTg = BigInt("1883")
		const address6WLaoM = accounts[0]
		const addressG6MwMSm = accounts[0]
		const uintRtVlNoZ = await ANRXTokenr0piT1y.allowance.call(addressjpfH1Ev, addressD5DJbwP, {from: accounts[2]});
		const boolbBCnXsV = await ANRXTokenr0piT1y.transferFrom.call(addressG6MwMSm, address6WLaoM, uintiFoDTg, {from: accounts[2]});
		const uinthrLP4rT = await ANRXTokenr0piT1y.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintYCCSLDa = await ANRXTokenr0piT1y.totalSupply.call({from: accounts[1]});

		assert.equal(uintRtVlNoZ, BigInt("0"))
		await expect(ANRXTokenr0piT1y.transferFrom.call(addressG6MwMSm, address6WLaoM, uintiFoDTg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintyBGF0BQ = BigInt("421")
		const stringiT1Ufjk = "wVdeK3q2vvnx5LkLXOYDOnosmTNw2RAZ1STBoZ9sflKBSmthgyvysH1AB2NMcxUlmljekkS8qXt"
		const stringmjUcGRz = "zAUDv0BX2f4zU1qOe"
		const uintPbcAMfh = BigInt("1825")
		const ANRXTokeniXx2zW9 = await ANRXToken.new(uintyBGF0BQ, stringiT1Ufjk, stringmjUcGRz, uintPbcAMfh, {from: accounts[0]});
		const addressOTuMI2z = accounts[3]
		const uintPE4oDNL = BigInt("674")
		const addresseUS7Iyz = accounts[2]
		const uintESZOZuu = BigInt("936")
		const addressnRTkEtO = accounts[2]
		const uintm8o0kXy = await ANRXTokeniXx2zW9.balanceOf.call(addressOTuMI2z, {from: "0x0000000000000000000000000000000000000001"});
		const boolmEcMzD = await ANRXTokeniXx2zW9.approve.call(addresseUS7Iyz, uintPE4oDNL, {from: accounts[3]});
		const boolBiqRlQV = await ANRXTokeniXx2zW9.approve.call(addressnRTkEtO, uintESZOZuu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBiqRlQV, true)
		assert.equal(boolmEcMzD, true)
		assert.equal(uintm8o0kXy, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintvS3WvZL = BigInt("1385")
		const stringuJIdGu3 = "1qXgJAUGpF9C08VEwcnQ1uUxIBjHH9MjpCRDfHc"
		const stringx0j1Rjs = "hRvvO6NSSIunvOCisD0"
		const uintCznrw9 = BigInt("1200")
		const ANRXTokenm5SAyB0 = await ANRXToken.new(uintvS3WvZL, stringuJIdGu3, stringx0j1Rjs, uintCznrw9, {from: accounts[4]});
		const uintdb0q9Le = BigInt("962")
		const addresskVooiiG = accounts[3]
		const uinth2A1Tnw = BigInt("1264")
		const addressCCKlulK = accounts[3]
		const addresshqbUWVz = accounts[3]
		const uintAmcnO6 = await ANRXTokenm5SAyB0.totalSupply.call({from: accounts[2]});
		const uintqxId8P7 = await ANRXTokenm5SAyB0.redeem.call(uintdb0q9Le, {from: accounts[4]});
		const addressVj2xrqR = await ANRXTokenm5SAyB0.deprecate.call(addresskVooiiG, {from: accounts[4]});
		const bools9UClTk = await ANRXTokenm5SAyB0.approve.call(addressCCKlulK, uinth2A1Tnw, {from: accounts[2]});
		const uintYC1uNCl = await ANRXTokenm5SAyB0.balanceOf.call(addresshqbUWVz, {from: accounts[1]});
		const uintvQk9TuR = await ANRXTokenm5SAyB0.totalSupply.call({from: accounts[0]});

		assert.equal(bools9UClTk, true)
		assert.equal(uintAmcnO6, BigInt("1385"))
		assert.equal(uintYC1uNCl, BigInt("0"))
		assert.equal(uintvQk9TuR, BigInt("1385"))
	});

	it('test for ANRXToken', async () => {
		const uintIK0NQyO = BigInt("421")
		const stringiT1Ufjk = "wVdeK3q2vvnx5LkLXOYDOnosmTNw2RAZ1STBoZ9sflKBSmthgyvysH1AB2NMcxUlmljekkS8qXt"
		const stringmjUcGRz = "zAUDv0BX2f4zU1qOe"
		const uintEKoTU3z = BigInt("1825")
		const ANRXTokeniXx2zW9 = await ANRXToken.new(uintIK0NQyO, stringiT1Ufjk, stringmjUcGRz, uintEKoTU3z, {from: accounts[0]});
		const uintC9fiT6N = BigInt("1509")
		const uint4ztae4 = BigInt("1003")
		const uintoBwnbL = BigInt("674")
		const addressAxYAKQv = accounts[2]
		const uintnpsGUQA = BigInt("936")
		const addressmQbYNeq = accounts[2]
		const uintMm5G8f = await ANRXTokeniXx2zW9.setParams.call(uint4ztae4, uintC9fiT6N, {from: accounts[0]});
		const boolmEcMzD = await ANRXTokeniXx2zW9.approve.call(addressAxYAKQv, uintoBwnbL, {from: accounts[3]});
		const boolBiqRlQV = await ANRXTokeniXx2zW9.approve.call(addressmQbYNeq, uintnpsGUQA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ANRXTokeniXx2zW9.setParams.call(uint4ztae4, uintC9fiT6N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintOQysusm = BigInt("421")
		const stringiT1Ufjk = "wVdeK3q2vvnx5LkLXOYDOnosmTNw2RAZ1STBoZ9sflKBSmthgyvysH1AB2NMcxUlmljekkS8qXt"
		const stringmjUcGRz = "zAUDv0BX2f4zU1qOe"
		const uintQBQa4eg = BigInt("1825")
		const ANRXTokeniXx2zW9 = await ANRXToken.new(uintOQysusm, stringiT1Ufjk, stringmjUcGRz, uintQBQa4eg, {from: accounts[0]});
		const addresshGsdKFP = accounts[0]
		const uintnbC4DGB = BigInt("48")
		const uintn6XTTMB = BigInt("1223")
		const addressfPH65i = accounts[4]
		const addressEX7CsXr = accounts[5]
		const uintCgfBJB = BigInt("956")
		const addressBMHmpKP = accounts[3]
		const uintd1Rd7rx = await ANRXTokeniXx2zW9.balanceOf.call(addresshGsdKFP, {from: accounts[3]});
		const uintRtW7cm1 = await ANRXTokeniXx2zW9.issue.call(uintnbC4DGB, {from: accounts[0]});
		const uintYUOkFxP = await ANRXTokeniXx2zW9.redeem.call(uintn6XTTMB, {from: accounts[4]});
		const uintxe1CCTM = await ANRXTokeniXx2zW9.allowance.call(addressEX7CsXr, addressfPH65i, {from: accounts[2]});
		const boolBiqRlQV = await ANRXTokeniXx2zW9.approve.call(addressBMHmpKP, uintCgfBJB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintd1Rd7rx, BigInt("421"))
		await expect(ANRXTokeniXx2zW9.redeem.call(uintn6XTTMB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintR0nD5A7 = BigInt("421")
		const stringiT1Ufjk = "wVdeK3q2vvnx5LkLXOYDOnosmTNw2RAZ1STBoZ9sflKBSmthgyvysH1AB2NMcxUlmljekkS8qXt"
		const stringmjUcGRz = "zAUDv0BX2f4zU1qOe"
		const uintW3iPCNg = BigInt("1825")
		const ANRXTokeniXx2zW9 = await ANRXToken.new(uintR0nD5A7, stringiT1Ufjk, stringmjUcGRz, uintW3iPCNg, {from: accounts[0]});
		const uintQgbOgi = BigInt("1509")
		const uintMRe6tUt = BigInt("7")
		const uintMm5G8f = await ANRXTokeniXx2zW9.setParams.call(uintMRe6tUt, uintQgbOgi, {from: accounts[0]});

		await expect(ANRXTokeniXx2zW9.setParams.call(uintMRe6tUt, uintQgbOgi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})