const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintYkxuB4 = BigInt("1677")
		const stringUr9di6 = "N6xu"
		const stringvzezO3W = "0yj8QIE3pToKdyG1hqyp5sNoR6VgtJ5Z69w1szt0tY9lU"
		const uintiNbi9K0 = BigInt("83")
		const ANRXTokenT3cik8n = await ANRXToken.new(uintYkxuB4, stringUr9di6, stringvzezO3W, uintiNbi9K0, {from: accounts[4]});
		const addressARRkjD = accounts[2]
		const addressUrqayd6 = accounts[1]
		const uintd7Pk8Mu = BigInt("435")
		const uintyiWR5Oj = BigInt("509")
		const uintJU0HHCV = await ANRXTokenT3cik8n.balanceOf.call(addressARRkjD, {from: accounts[5]});
		const uintoKrX9zc = await ANRXTokenT3cik8n.balanceOf.call(addressUrqayd6, {from: accounts[4]});
		const uintfnhjY8i = await ANRXTokenT3cik8n.issue.call(uintd7Pk8Mu, {from: accounts[4]});
		const uintObOfmtN = await ANRXTokenT3cik8n.issue.call(uintyiWR5Oj, {from: accounts[4]});

		assert.equal(uintJU0HHCV, BigInt("0"))
		assert.equal(uintoKrX9zc, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintkOdSjlE = BigInt("230")
		const stringwmGlCXz = "ZVk6IAy5IAtX6v532IithjFM8BZXf5MstdCJH2hR0NobGpODj96MGPO2SNLSUVxqgDsNPoaf8QpHihIMoMkL8ydzAc"
		const stringPpuFAiz = "b8td0vy44PkMHGDEMDThBmeI68OSIQCpz8lH8BU98"
		const uintwQzq1o1 = BigInt("14")
		const ANRXTokenKYaYzok = await ANRXToken.new(uintkOdSjlE, stringwmGlCXz, stringPpuFAiz, uintwQzq1o1, {from: accounts[5]});
		const uintHFZtHuJ = BigInt("601")
		const addresspYosV7O = accounts[4]
		const addressAaO23Pp = accounts[3]
		const uintvfhuh1 = BigInt("33")
		const uintDCKAOdg = await ANRXTokenKYaYzok.redeem.call(uintHFZtHuJ, {from: accounts[2]});
		const uintXvpe7hh = await ANRXTokenKYaYzok.allowance.call(addressAaO23Pp, addresspYosV7O, {from: accounts[5]});
		const uintDpLL7Qs = await ANRXTokenKYaYzok.totalSupply.call({from: accounts[3]});
		const uintM72U4xt = await ANRXTokenKYaYzok.issue.call(uintvfhuh1, {from: accounts[2]});

		await expect(ANRXTokenKYaYzok.redeem.call(uintHFZtHuJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintlWNJlYt = BigInt("1947")
		const stringIArUQdv = "fT5tu3i8VVpHkMUsfKULJlnvktMT861vXDyfc6iJ1eJLm61FYhISOwboM"
		const stringVyMUGn = "6NNd7UuteAUzEQs7eZw15Ta8YNjTPhlvka4OyCi"
		const uintjq55gJQ = BigInt("1277")
		const ANRXTokenCzkPMbd = await ANRXToken.new(uintlWNJlYt, stringIArUQdv, stringVyMUGn, uintjq55gJQ, {from: accounts[4]});
		const addressFmC0vD = accounts[1]
		const addresslrl6k72 = accounts[1]
		const uintWKxSAhD = BigInt("870")
		const addressLEmWYTW = accounts[0]
		const address6nIxJG = accounts[0]
		const addressTudXFsE = accounts[5]
		const addressABzugFc = accounts[1]
		const uinttAvdluN = BigInt("1104")
		const addresswzx189 = accounts[2]
		const uintiSOKYo = await ANRXTokenCzkPMbd.totalSupply.call({from: accounts[2]});
		const uintr2JGEPS = await ANRXTokenCzkPMbd.allowance.call(addresslrl6k72, addressFmC0vD, {from: accounts[0]});
		const boolQWrcSHu = await ANRXTokenCzkPMbd.transferFrom.call(address6nIxJG, addressLEmWYTW, uintWKxSAhD, {from: accounts[2]});
		const uintH4kAExJ = await ANRXTokenCzkPMbd.allowance.call(addressABzugFc, addressTudXFsE, {from: accounts[4]});
		const uintwMEg2G = await ANRXTokenCzkPMbd.totalSupply.call({from: accounts[3]});
		const boolCFtVSb = await ANRXTokenCzkPMbd.approve.call(addresswzx189, uinttAvdluN, {from: accounts[1]});

		assert.equal(uintiSOKYo, BigInt("1947"))
		assert.equal(uintr2JGEPS, BigInt("0"))
		await expect(ANRXTokenCzkPMbd.transferFrom.call(address6nIxJG, addressLEmWYTW, uintWKxSAhD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintVXi88Ku = BigInt("422")
		const stringsTuIFzH = "TEKIHGGyTsoacbdK5m6WsYHyFZ3DnMbmbuGFvHdPwRLGgS0jbKcURx4hONfaMMhYQFgRHC3D"
		const stringvhFP4Vq = "f9ndHH83uSVKudcoIbsrw0fcslNdmIt29hV"
		const uintwrSDOA = BigInt("411")
		const ANRXTokenHZw1GKv = await ANRXToken.new(uintVXi88Ku, stringsTuIFzH, stringvhFP4Vq, uintwrSDOA, {from: "0x0000000000000000000000000000000000000001"});
		const uintowJF4j = BigInt("1712")
		const addresshwRL7kR = accounts[3]
		const uintOyaEVXZ = BigInt("1141")
		const uintxdgmcN = BigInt("1339")
		const addresszsbjLYr = accounts[2]
		const addresslNxB5ZO = accounts[4]
		const boolpcLK3Ob = await ANRXTokenHZw1GKv.approve.call(addresshwRL7kR, uintowJF4j, {from: "0x0000000000000000000000000000000000000001"});
		const uintDDUK6QA = await ANRXTokenHZw1GKv.setParams.call(uintxdgmcN, uintOyaEVXZ, {from: accounts[1]});
		const uintpMAUcPn = await ANRXTokenHZw1GKv.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintmShxPPA = await ANRXTokenHZw1GKv.balanceOf.call(addresszsbjLYr, {from: accounts[4]});
		const addressF9Pyhhu = await ANRXTokenHZw1GKv.deprecate.call(addresslNxB5ZO, {from: accounts[2]});
	});

	it('test for ANRXToken', async () => {
		const uintLgvzlFk = BigInt("668")
		const stringiR0aURW = "0TZKpRuYmxYy84ACxI4J4n2t6xSoEfK9D8C3JY8eK3WAHVTPmbYzvsimwuF4u5ElHJ6HfZ7COQxujqXO5t3HZXZ"
		const stringF0SHeL = "MJ7oIfFT7agyBcO584cwIpth4ghSH2vqcXI9yFYeu4akFuyVuUET3bma9wmQ7tU6mfPJ2r3W1qCmC9bCZCgdYJ7QI2GTc"
		const uintng6E7sQ = BigInt("343")
		const ANRXTokenEb2bPDK = await ANRXToken.new(uintLgvzlFk, stringiR0aURW, stringF0SHeL, uintng6E7sQ, {from: accounts[2]});
		const addressXh0BOU = accounts[2]
		const uintdqDeYQg = BigInt("351")
		const uintyIUwJb2 = BigInt("1481")
		const uintrSHdNmo = await ANRXTokenEb2bPDK.balanceOf.call(addressXh0BOU, {from: accounts[2]});
		const uintKvao6yV = await ANRXTokenEb2bPDK.redeem.call(uintdqDeYQg, {from: accounts[2]});
		const uintRp4kaeL = await ANRXTokenEb2bPDK.issue.call(uintyIUwJb2, {from: accounts[0]});
		const uintXhQ8ig = await ANRXTokenEb2bPDK.totalSupply.call({from: accounts[4]});

		assert.equal(uintrSHdNmo, BigInt("668"))
		await expect(ANRXTokenEb2bPDK.issue.call(uintyIUwJb2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintFwf1VNu = BigInt("13")
		const stringckBPJ2Q = "83svjw8OVRJQEGazDFKiqGWmbOARmA9A1d"
		const stringxtdlekh = "5K9XFg4q6wV3THGYsAM"
		const uintC67i6XR = BigInt("831")
		const ANRXTokenXM3swbl = await ANRXToken.new(uintFwf1VNu, stringckBPJ2Q, stringxtdlekh, uintC67i6XR, {from: accounts[5]});
		const uintygdM68M = BigInt("929")
		const addressN56cFP = accounts[3]
		const addressuWnVu4P = accounts[2]
		const uinthA0sNDW = BigInt("1135")
		const address8dzOEV = accounts[1]
		const addressGTnMXyK = accounts[2]
		const addressRhk0e1 = accounts[3]
		const boolej5QgVb = await ANRXTokenXM3swbl.approve.call(addressN56cFP, uintygdM68M, {from: accounts[5]});
		const uintcDcnqDI = await ANRXTokenXM3swbl.balanceOf.call(addressuWnVu4P, {from: accounts[0]});
		const boolxIFva2I = await ANRXTokenXM3swbl.transferFrom.call(addressGTnMXyK, address8dzOEV, uinthA0sNDW, {from: accounts[4]});
		const uintKAR6s5F = await ANRXTokenXM3swbl.balanceOf.call(addressRhk0e1, {from: "0x0000000000000000000000000000000000000001"});
		const uintg8BU2cV = await ANRXTokenXM3swbl.totalSupply.call({from: accounts[1]});

		assert.equal(boolej5QgVb, true)
		assert.equal(uintcDcnqDI, BigInt("0"))
		await expect(ANRXTokenXM3swbl.transferFrom.call(addressGTnMXyK, address8dzOEV, uinthA0sNDW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintd390QCH = BigInt("13")
		const stringckBPJ2Q = "83svjw8OVRJQEGazDFKiqGWmbOARmA9A1d"
		const stringxtdlekh = "5K9XFg4q6wV3THGYsAM"
		const uint5zfFbj = BigInt("831")
		const ANRXTokenXM3swbl = await ANRXToken.new(uintd390QCH, stringckBPJ2Q, stringxtdlekh, uint5zfFbj, {from: accounts[5]});
		const addressz2Sjd6P = accounts[2]
		const addressrQkEpaX = accounts[3]
		const uintUvNmOUD = BigInt("1291")
		const addressrRsspb4 = "0x0000000000000000000000000000000000000001"
		const uintcDcnqDI = await ANRXTokenXM3swbl.balanceOf.call(addressz2Sjd6P, {from: accounts[0]});
		const uintKAR6s5F = await ANRXTokenXM3swbl.balanceOf.call(addressrQkEpaX, {from: "0x0000000000000000000000000000000000000001"});
		const boolFoeNsR7 = await ANRXTokenXM3swbl.transfer.call(addressrRsspb4, uintUvNmOUD, {from: accounts[1]});
		const uintg8BU2cV = await ANRXTokenXM3swbl.totalSupply.call({from: accounts[1]});

		assert.equal(uintKAR6s5F, BigInt("0"))
		assert.equal(uintcDcnqDI, BigInt("0"))
		await expect(ANRXTokenXM3swbl.transfer.call(addressrRsspb4, uintUvNmOUD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintAbO4m2Z = BigInt("1354")
		const stringiz12fbN = "3OUeWiIcISl2uHpelrKU6cx6bZHiSCic6WpPeB5bQjhmVcNA"
		const stringHq8ulD0 = "ynwY5sL1M2aUtUGMgJmIC4raMIb8AlAnpz6qCL4sdZMB1b2roajc"
		const uintPtK8dEk = BigInt("1435")
		const ANRXTokenAMz1GoK = await ANRXToken.new(uintAbO4m2Z, stringiz12fbN, stringHq8ulD0, uintPtK8dEk, {from: accounts[3]});
		const addressbzqoBvU = accounts[3]
		const addressS0atZM7 = accounts[2]
		const addressJyqM3VP = accounts[5]
		const uinta8q7fYd = BigInt("1626")
		const addresssAYPzkH = accounts[3]
		const addressiSxETkz = await ANRXTokenAMz1GoK.deprecate.call(addressbzqoBvU, {from: accounts[3]});
		const uintndQuvfD = await ANRXTokenAMz1GoK.allowance.call(addressJyqM3VP, addressS0atZM7, {from: accounts[2]});
		const bools1M9Tn5 = await ANRXTokenAMz1GoK.transfer.call(addresssAYPzkH, uinta8q7fYd, {from: accounts[4]});

		assert.equal(uintndQuvfD, BigInt("0"))
		await expect(ANRXTokenAMz1GoK.transfer.call(addresssAYPzkH, uinta8q7fYd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintg4oZcMz = BigInt("1354")
		const stringiz12fbN = "3OUeWiIcISl2uHpelrKU6cx6bZHiSCic6WpPeB5bQjhmVcNA"
		const stringHq8ulD0 = "ynwY5sL1M2aUtUGMgJmIC4raMIb8AlAnpz6qCL4sdZMB1b2roajc"
		const uintziRW5D = BigInt("1435")
		const ANRXTokenAMz1GoK = await ANRXToken.new(uintg4oZcMz, stringiz12fbN, stringHq8ulD0, uintziRW5D, {from: accounts[3]});
		const addressrfE6JP8 = accounts[2]
		const addressew0yRV = accounts[5]
		const uintMrFdKB = BigInt("428")
		const uintcIu064 = BigInt("1599")
		const uintndQuvfD = await ANRXTokenAMz1GoK.allowance.call(addressew0yRV, addressrfE6JP8, {from: accounts[2]});
		const uintE2WyAqK = await ANRXTokenAMz1GoK.setParams.call(uintcIu064, uintMrFdKB, {from: accounts[3]});

		assert.equal(uintndQuvfD, BigInt("0"))
		await expect(ANRXTokenAMz1GoK.setParams.call(uintcIu064, uintMrFdKB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})