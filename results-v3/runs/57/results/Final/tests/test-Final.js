const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringZRwIwiD = "wt8Ito7bc4eJObPRjNDRJXbqqF1sJbzlnlxDG1h65LFd2vv3dX8fUNPIQ"
		const stringHHjiORG = "ylXVMSr4s46CjcKqHD52SQTpizLEg91IcphaarTgHt4kB2Deawk4mA3aXvfkt0kiHE6vRyrL"
		const uintLohMLG6 = BigInt("244")
		const FinalUTneAAX = await Final.new(stringZRwIwiD, stringHHjiORG, uintLohMLG6, {from: accounts[0]});
		const uintKMdV5vP = BigInt("1900")
		const addressqTVBCq5 = accounts[5]
		const addressiO8dZWG = accounts[4]
		const addressSZDtuj = accounts[1]
		const boolwd6v8s = await FinalUTneAAX.approve.call(addressqTVBCq5, uintKMdV5vP, {from: accounts[1]});
		const uint8aFjL7n8 = await FinalUTneAAX.decimals.call({from: accounts[3]});
		const uintJFqd5Vt = await FinalUTneAAX.allowance.call(addressSZDtuj, addressiO8dZWG, {from: accounts[0]});

		assert.equal(boolwd6v8s, true)
		assert.equal(uint8aFjL7n8, BigInt("18"))
		assert.equal(uintJFqd5Vt, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringPcHzTaz = "UDRebgxGyipObVvj6XNCV31RywzsVbAvWHs"
		const stringk9iskvh = "hqCwW6IHKFCQVPJOBz6BBWszJGXTeMESyM0IObgHP4AhrVyEmEZPgzFrhD0JQUfSRcn78cePAMciwsfuTLG9"
		const uintJNAME4u = BigInt("1303")
		const FinalnVy8hQE = await Final.new(stringPcHzTaz, stringk9iskvh, uintJNAME4u, {from: accounts[3]});
		const addresswXd7RI5 = accounts[1]
		const addressQn1xdv = accounts[4]
		const addresszqPrOPF = "0x0000000000000000000000000000000000000001"
		const uintHRXQopU = BigInt("1832")
		const addressYdX8g7m = accounts[0]
		const uintx6QwnAP = await FinalnVy8hQE.balanceOf.call(addresswXd7RI5, {from: accounts[2]});
		const uintkO4mPaa = await FinalnVy8hQE.allowance.call(addresszqPrOPF, addressQn1xdv, {from: accounts[0]});
		const bools0xiF4v = await FinalnVy8hQE.increaseAllowance.call(addressYdX8g7m, uintHRXQopU, {from: "0x0000000000000000000000000000000000000001"});
		const stringWPVLney = await FinalnVy8hQE.name.call({from: accounts[3]});

		assert.equal(uintkO4mPaa, BigInt("0"))
		assert.equal(uintx6QwnAP, BigInt("0"))
		await expect(FinalnVy8hQE.increaseAllowance.call(addressYdX8g7m, uintHRXQopU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringMcwdprB = "8JGLHK90hA4NbodADic1nzjgUXQQW7fRDvxLFkhMRgJhMUeKdhn2Nl6AQFUbdIC3Ta1PNSCNrDROsP469tXJn"
		const stringpY7OpQE = "uGlufrxJb8wfTM2gIT31hNgry7G8nwcQNofl9dCl3VYwjdeUlwDYUBQY1VljmF6du8rTmJyxSv1nJiIO2K8tyUlgvJg"
		const uintvk1GqcQ = BigInt("31")
		const FinaljNd6MwA = await Final.new(stringMcwdprB, stringpY7OpQE, uintvk1GqcQ, {from: accounts[4]});
		const addressxRHDf5W = "0x0000000000000000000000000000000000000001"
		const uintm3QwkZ3 = BigInt("2013")
		const addressNmlo1EL = accounts[5]
		const uintKR7l72t = BigInt("1390")
		const addressrMSvjEO = accounts[4]
		const uinthbZyZGN = await FinaljNd6MwA.balanceOf.call(addressxRHDf5W, {from: accounts[0]});
		const boolKj5MJE8 = await FinaljNd6MwA.transfer.call(addressNmlo1EL, uintm3QwkZ3, {from: accounts[2]});
		const boolbPc5pqt = await FinaljNd6MwA.increaseAllowance.call(addressrMSvjEO, uintKR7l72t, {from: accounts[1]});

		assert.equal(uinthbZyZGN, BigInt("0"))
		await expect(FinaljNd6MwA.transfer.call(addressNmlo1EL, uintm3QwkZ3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringXrAGFp9 = "w5f0nzjVl08mEG527fSrYAlCLNf"
		const stringFXqp2z = "zqzjwmy2ENqujQjwJwCR3ipThbJ6THpJeoVvCfnXJLLStoUS5VO1"
		const uintnbSWtXJ = BigInt("200")
		const Finalt88Gl09 = await Final.new(stringXrAGFp9, stringFXqp2z, uintnbSWtXJ, {from: accounts[1]});
		const addressTf9ehH = accounts[3]
		const addressm6QvGQo = accounts[4]
		const uintBI2wL59 = BigInt("281")
		const addressZ9MfPX = accounts[2]
		const addressfpQ1Qef = "0x0000000000000000000000000000000000000001"
		const uintsSiM50O = BigInt("673")
		const addressNfAPBnn = accounts[4]
		const uintca1MgYl = BigInt("1443")
		const addresst7z44b = accounts[1]
		const address1gaDa9 = accounts[1]
		const uinthH6ex8i = await Finalt88Gl09.allowance.call(addressm6QvGQo, addressTf9ehH, {from: accounts[4]});
		const booltwMiZdR = await Finalt88Gl09.transferFrom.call(addressfpQ1Qef, addressZ9MfPX, uintBI2wL59, {from: accounts[4]});
		const boolfZ8tG9U = await Finalt88Gl09.transfer.call(addressNfAPBnn, uintsSiM50O, {from: accounts[2]});
		const boolDRK21YT = await Finalt88Gl09.transferFrom.call(address1gaDa9, addresst7z44b, uintca1MgYl, {from: accounts[4]});
		const uintbFtoVSv = await Finalt88Gl09.totalSupply.call({from: accounts[5]});

		assert.equal(uinthH6ex8i, BigInt("0"))
		await expect(Finalt88Gl09.transferFrom.call(addressfpQ1Qef, addressZ9MfPX, uintBI2wL59, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringXrAGFp9 = "w5f0nzjVl08mEG527fSrYAlCLNf"
		const stringFXqp2z = "zqzjwmy2ENqujQjwJwCR3ipThbJ6THpJeoVvCfnXJLLStoUS5VO1"
		const uintplNYiY0 = BigInt("200")
		const Finalt88Gl09 = await Final.new(stringXrAGFp9, stringFXqp2z, uintplNYiY0, {from: accounts[1]});
		const addressWlRbYM3 = accounts[3]
		const addresspepBdTw = accounts[4]
		const addressHCIIMTj = accounts[0]
		const uintuAzIVqk = BigInt("1443")
		const addressMNEuKRv = accounts[1]
		const addressyiahj5V = accounts[1]
		const uintl5bA5Cz = BigInt("2")
		const addressQjL7vx = accounts[1]
		const uinthH6ex8i = await Finalt88Gl09.allowance.call(addresspepBdTw, addressWlRbYM3, {from: accounts[4]});
		const boolvcqOsPG = await Finalt88Gl09.transferownership.call(addressHCIIMTj, {from: accounts[4]});
		const boolDRK21YT = await Finalt88Gl09.transferFrom.call(addressyiahj5V, addressMNEuKRv, uintuAzIVqk, {from: accounts[4]});
		const uintbFtoVSv = await Finalt88Gl09.totalSupply.call({from: accounts[5]});
		const boolX13wPLs = await Finalt88Gl09.increaseAllowance.call(addressQjL7vx, uintl5bA5Cz, {from: accounts[0]});

		assert.equal(uinthH6ex8i, BigInt("0"))
		await expect(Finalt88Gl09.transferownership.call(addressHCIIMTj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringj1L58sF = "GOJ4XeZl6akITfBEdB77X4Yeuo4Tpzl2xWI2VLPNDqaYc6XptMf4G7RaWpC4NdckynWx3qypxVwYQWiABx9"
		const stringzUmz6FK = "KpIZLXlHPCjx0auCcKDv41HzmlIwlHo6wwEvHpus1opVQ7CpfLqso6lulTnXbbP15K5PER1Wu2uFYmSNHgLR"
		const uintSeHBPSv = BigInt("1831")
		const FinalkgjGVWX = await Final.new(stringj1L58sF, stringzUmz6FK, uintSeHBPSv, {from: accounts[1]});
		const uintag87AX6 = BigInt("1881")
		const addresswHjAW9e = accounts[0]
		const uintpVPVC59 = BigInt("157")
		const addressa9nFjwQ = accounts[2]
		const uintQO4n3U6 = BigInt("90")
		const addressgM5AMh = accounts[3]
		const addressRFawrDT = accounts[3]
		const uintMbejMWe = BigInt("2039")
		const addressZkMj6cx = accounts[3]
		const uintsBW4xhJ = BigInt("1625")
		const addressRodzOTF = "0x0000000000000000000000000000000000000001"
		const boollqwhozR = await FinalkgjGVWX.approveAndCall.call(addresswHjAW9e, uintag87AX6, {from: accounts[3]});
		const boolFpJHgoZ = await FinalkgjGVWX.transfer.call(addressa9nFjwQ, uintpVPVC59, {from: accounts[0]});
		const boolWlDgDD9 = await FinalkgjGVWX.transferFrom.call(addressRFawrDT, addressgM5AMh, uintQO4n3U6, {from: accounts[2]});
		const boolHzMD9Q2 = await FinalkgjGVWX.transfer.call(addressZkMj6cx, uintMbejMWe, {from: accounts[3]});
		const boolk5hjJKz = await FinalkgjGVWX.transfer.call(addressRodzOTF, uintsBW4xhJ, {from: accounts[0]});
		const stringGam6rV9 = await FinalkgjGVWX.name.call({from: accounts[0]});

		await expect(FinalkgjGVWX.approveAndCall.call(addresswHjAW9e, uintag87AX6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string59k2xG = "ouyhhVFlRieJKroIrkQCVqWYDgaPjDO"
		const stringk1NW9xe = "Eyuz1Fxd9LBAMV11j1t4PLf8bTftSOC"
		const uintuk9SqQ = BigInt("96")
		const Finali7tg0oS = await Final.new(string59k2xG, stringk1NW9xe, uintuk9SqQ, {from: accounts[1]});
		const uintJhRCsDi = BigInt("832")
		const addresst3LpCWn = accounts[1]
		const addressVixYm7n = accounts[3]
		const addressNidTkLZ = "0x0000000000000000000000000000000000000001"
		const uint8MTIaAXE = await Finali7tg0oS.decimals.call({from: accounts[3]});
		const boolTJOjjD5 = await Finali7tg0oS.transfer.call(addresst3LpCWn, uintJhRCsDi, {from: "0x0000000000000000000000000000000000000001"});
		const uintuQz5MRq = await Finali7tg0oS.allowance.call(addressNidTkLZ, addressVixYm7n, {from: accounts[3]});

		assert.equal(uint8MTIaAXE, BigInt("18"))
		await expect(Finali7tg0oS.transfer.call(addresst3LpCWn, uintJhRCsDi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPWAomTP = "M194PkYQDParIHhLbPKTKYfhfQZt5WLlvloWBwfCrHcuyPprvQRhZ2qDzqMee5u4NiIh07KM8snKp3Gm2YiGJ7uL1iPryvxC"
		const stringp9x4coo = "wRUMkVOkIOs7N9AHgLt9Q9S8elBcxWOk1be22CgqSe1ucNwOArX4"
		const uintgBMuhoC = BigInt("639")
		const FinalMt9BDNW = await Final.new(stringPWAomTP, stringp9x4coo, uintgBMuhoC, {from: "0x0000000000000000000000000000000000000001"});
		const uintprYKhhR = BigInt("784")
		const addressUbJfofR = accounts[3]
		const addressYwzJIhv = accounts[5]
		const addressaFsj4Wc = accounts[5]
		const uinty0mfnZE = BigInt("309")
		const addressocY3rko = accounts[1]
		const uintT0PTFIf = BigInt("771")
		const addressuwB2nRK = accounts[0]
		const addressFKITyQw = accounts[0]
		const boolaJU3Z3x = await FinalMt9BDNW.approveAndCall.call(addressUbJfofR, uintprYKhhR, {from: accounts[2]});
		const uinta3q7d1h = await FinalMt9BDNW.allowance.call(addressaFsj4Wc, addressYwzJIhv, {from: accounts[1]});
		const boolHOwFBj4 = await FinalMt9BDNW.decreaseAllowance.call(addressocY3rko, uinty0mfnZE, {from: accounts[1]});
		const boolG5cEtEg = await FinalMt9BDNW.increaseAllowance.call(addressuwB2nRK, uintT0PTFIf, {from: accounts[2]});
		const uint4W9MR1 = await FinalMt9BDNW.balanceOf.call(addressFKITyQw, {from: accounts[4]});
	});

	it('test for Final', async () => {
		const stringIskH4me = "rqqWcYai5iOlv1aVWyT4xtl3gKlUAEKIWnBn3koCWwGHNDAL6xFd3QywPNuz2OH7IzKAyiyBw32aO"
		const stringbOozJSm = "PTHkLL9ywZebtzFxzgdyhWpebNoycf2JQE4NYEBor7NFvY3EiDXzIUwzqzgMvLt4WknS8o9kk3LmVmwmmq7Gim7BoPrYnYa"
		const uintweDbgVt = BigInt("226")
		const FinalLeBFmf = await Final.new(stringIskH4me, stringbOozJSm, uintweDbgVt, {from: accounts[2]});
		const uintpCyUl0p = BigInt("1122")
		const addresszGdAGkW = accounts[1]
		const uintZKte00P = BigInt("1406")
		const addressP0zVCYA = accounts[1]
		const uint8rjTvWZW = await FinalLeBFmf.decimals.call({from: accounts[2]});
		const boolYfd5i52 = await FinalLeBFmf.approve.call(addresszGdAGkW, uintpCyUl0p, {from: accounts[2]});
		const boolvJwcBE = await FinalLeBFmf.approveAndCall.call(addressP0zVCYA, uintZKte00P, {from: accounts[2]});

		assert.equal(boolYfd5i52, true)
		assert.equal(boolvJwcBE, true)
		assert.equal(uint8rjTvWZW, BigInt("18"))
	});

	it('test for Final', async () => {
		const string59k2xG = "ouyhhVFlRieJKroIrkQCVqWYDgaPjDO"
		const stringk1NW9xe = "Eyuz1Fxd9LBAMV11j1t4PLf8bTftSOC"
		const uintdZyfrI = BigInt("96")
		const Finali7tg0oS = await Final.new(string59k2xG, stringk1NW9xe, uintdZyfrI, {from: accounts[1]});
		const addressD3GVunF = accounts[0]
		const addressbWCO0JE = accounts[3]
		const addressfMLEtT = "0x0000000000000000000000000000000000000001"
		const boolElOQVP = await Finali7tg0oS.transferownership.call(addressD3GVunF, {from: accounts[1]});
		const uintuQz5MRq = await Finali7tg0oS.allowance.call(addressfMLEtT, addressbWCO0JE, {from: accounts[3]});

		assert.equal(boolElOQVP, true)
		assert.equal(uintuQz5MRq, BigInt("0"))
	});

	it('test for Final', async () => {
		const string59k2xG = "ouyhhVFlRieJKroIrkQCVqWYDgaPjDO"
		const stringk1NW9xe = "Eyuz1Fxd9LBAMV11j1t4PLf8bTftSOC"
		const uintlCRy90D = BigInt("96")
		const Finali7tg0oS = await Final.new(string59k2xG, stringk1NW9xe, uintlCRy90D, {from: accounts[1]});
		const addressIvWZgGP = accounts[4]
		const addressYun6q9w = accounts[2]
		const uintmSw0Ju = BigInt("0")
		const addressROx122g = accounts[4]
		const uintUgSQDjK = BigInt("1997")
		const addressQKvVih5 = "0x0000000000000000000000000000000000000001"
		const addressm4SNnB1 = accounts[1]
		const uintLWqT10x = await Finali7tg0oS.allowance.call(addressYun6q9w, addressIvWZgGP, {from: accounts[3]});
		const boolaMGY244 = await Finali7tg0oS.transfer.call(addressROx122g, uintmSw0Ju, {from: "0x0000000000000000000000000000000000000001"});
		const boolo0HbbZX = await Finali7tg0oS.transferFrom.call(addressm4SNnB1, addressQKvVih5, uintUgSQDjK, {from: accounts[3]});

		assert.equal(boolaMGY244, true)
		assert.equal(uintLWqT10x, BigInt("0"))
		await expect(Finali7tg0oS.transferFrom.call(addressm4SNnB1, addressQKvVih5, uintUgSQDjK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})