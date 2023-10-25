const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintQMDfipV = BigInt("96")
		const stringwHnWdNB = "8t1nGMgDMAaUXUWVSjBzjR4pJtnGesSSyTWkaRhTnTHuPJkM1LS3cRqpEjDx8KeekTfYjrB7C37ddoGGJYnkCpe4LDy3"
		const stringOH7rVnX = "xNYqhmblqo47U9iqnBleBccKPgR"
		const uintjsPpD1I = BigInt("1804")
		const ANRXTokencQ8WFjC = await ANRXToken.new(uintQMDfipV, stringwHnWdNB, stringOH7rVnX, uintjsPpD1I, {from: accounts[1]});
		const uintNGAMO02 = BigInt("242")
		const addressFeY7WU = accounts[3]
		const addressMkCpfsl = accounts[1]
		const boolIeA7GfW = await ANRXTokencQ8WFjC.approve.call(addressFeY7WU, uintNGAMO02, {from: accounts[1]});
		const addressnQf1qsj = await ANRXTokencQ8WFjC.deprecate.call(addressMkCpfsl, {from: accounts[0]});

		assert.equal(boolIeA7GfW, true)
		await expect(ANRXTokencQ8WFjC.deprecate.call(addressMkCpfsl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintDTbyifp = BigInt("1992")
		const stringgAz2JKE = "lAdf2TN7Z7L5D9UftJoKO6jk7XHR9o1hKnJmLnui4TSyedRQeDF6fXaclfFponsIHUn5h8DrxBvgoOEFasl0R9FbeaiykBa3W"
		const stringrL65rrx = "XlFixB4AXskOMso41IBe"
		const uintTJvP9On = BigInt("1112")
		const ANRXTokenO9CIdzp = await ANRXToken.new(uintDTbyifp, stringgAz2JKE, stringrL65rrx, uintTJvP9On, {from: "0x0000000000000000000000000000000000000001"});
		const uintFGAQYXz = BigInt("1995")
		const uinta5RL8X = BigInt("1266")
		const addresskVfDWL = accounts[3]
		const address4vIACN = "0x0000000000000000000000000000000000000001"
		const uintOQzgdBD = await ANRXTokenO9CIdzp.redeem.call(uintFGAQYXz, {from: accounts[2]});
		const boolM158FfP = await ANRXTokenO9CIdzp.transferFrom.call(address4vIACN, addresskVfDWL, uinta5RL8X, {from: accounts[4]});
		const uintIn55Akw = await ANRXTokenO9CIdzp.totalSupply.call({from: accounts[2]});
	});

	it('test for ANRXToken', async () => {
		const uintk6HrrHV = BigInt("1623")
		const stringlLux3MJ = "zYIfztzILNYPTxf39gBEV76grl9nP4zqXmSMM4NLMGLQoNnS85MYK8I3LkWE5O6ooythSnrIBfpQpTj7QcKp"
		const stringBAgRdK = "dHvr7qMwv1iywQgPECNMis7hFd6ggV5z0idQXNCvpVY"
		const uintcSlH7RE = BigInt("1958")
		const ANRXTokenmpXs1RC = await ANRXToken.new(uintk6HrrHV, stringlLux3MJ, stringBAgRdK, uintcSlH7RE, {from: accounts[4]});
		const uintw4T0UVb = BigInt("1087")
		const addressdcCRy1w = accounts[1]
		const boolt4PHUco = await ANRXTokenmpXs1RC.approve.call(addressdcCRy1w, uintw4T0UVb, {from: accounts[5]});
		const uintMqmR1qp = await ANRXTokenmpXs1RC.totalSupply.call({from: accounts[4]});

		assert.equal(boolt4PHUco, true)
		assert.equal(uintMqmR1qp, BigInt("1623"))
	});

	it('test for ANRXToken', async () => {
		const uintYNl2PNF = BigInt("230")
		const stringFhxSZ9T = "0Vn9RJ"
		const stringiyjBGQQ = "GAq6DmPrruWSTiqGCf0YsexDDWDV39tXkzrCATmcB6JVzsRbYDQIjxgwlRUh6u5npPOEdYufwvTCPV"
		const uintgpsddPS = BigInt("1110")
		const ANRXTokenepcWw8 = await ANRXToken.new(uintYNl2PNF, stringFhxSZ9T, stringiyjBGQQ, uintgpsddPS, {from: accounts[4]});
		const uintTcmxij = BigInt("399")
		const addressgvX7p6s = accounts[1]
		const addressWX5WtcV = accounts[1]
		const uintELQb4u = BigInt("109")
		const addressTBO8IcT = accounts[0]
		const uintncZePnq = BigInt("1673")
		const addresssw2kVrG = accounts[0]
		const uintzjUTgKh = BigInt("2000")
		const addresskTUH1wA = accounts[4]
		const addressMQVfWIm = accounts[3]
		const address4SYJBy = accounts[4]
		const booldW5PCyZ = await ANRXTokenepcWw8.approve.call(addressgvX7p6s, uintTcmxij, {from: accounts[1]});
		const addressiX5cl1b = await ANRXTokenepcWw8.deprecate.call(addressWX5WtcV, {from: accounts[4]});
		const boolFZkTx98 = await ANRXTokenepcWw8.transfer.call(addressTBO8IcT, uintELQb4u, {from: accounts[0]});
		const boolrhgnGbQ = await ANRXTokenepcWw8.approve.call(addresssw2kVrG, uintncZePnq, {from: "0x0000000000000000000000000000000000000001"});
		const boold6nKrdU = await ANRXTokenepcWw8.transferFrom.call(addressMQVfWIm, addresskTUH1wA, uintzjUTgKh, {from: accounts[4]});
		const addresscB0mLZ = await ANRXTokenepcWw8.deprecate.call(address4SYJBy, {from: accounts[3]});

		assert.equal(booldW5PCyZ, true)
		await expect(ANRXTokenepcWw8.transfer.call(addressTBO8IcT, uintELQb4u, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintzGIoHxe = BigInt("1272")
		const stringAKUC4fs = "PCuiyrokekE4w7cRnTqu2e9vPTtnvE2ihYM9ll7nWMMoe32QLUwQWTt1fShxynbvBMtgKPl6j8COQl7SxGqEE6ArfHUCHPZCm9"
		const stringdtv40Eu = "UuROa4B2QBYkWlCuAFmLzCyDlrCr8p9QqtocrlwuFuT8Kt7gCUvx77UyEn637NzgABkmFH41Bo9XI786gkaEiRFFZ"
		const uintuKKPfbv = BigInt("6")
		const ANRXTokenQxkuNs8 = await ANRXToken.new(uintzGIoHxe, stringAKUC4fs, stringdtv40Eu, uintuKKPfbv, {from: accounts[2]});
		const uintBFAF0hM = BigInt("1238")
		const addressfVUmWGL = "0x0000000000000000000000000000000000000001"
		const addressLX2dfwn = accounts[2]
		const addresscl6d10T = "0x0000000000000000000000000000000000000001"
		const addressMTEAj4J = accounts[4]
		const boolOG1APTJ = await ANRXTokenQxkuNs8.transferFrom.call(addressLX2dfwn, addressfVUmWGL, uintBFAF0hM, {from: accounts[3]});
		const uintJdaQPVT = await ANRXTokenQxkuNs8.balanceOf.call(addresscl6d10T, {from: accounts[1]});
		const addressL0WVRES = await ANRXTokenQxkuNs8.deprecate.call(addressMTEAj4J, {from: accounts[2]});

		await expect(ANRXTokenQxkuNs8.transferFrom.call(addressLX2dfwn, addressfVUmWGL, uintBFAF0hM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintk2WlonP = BigInt("410")
		const stringf2DdN9I = "bI4eyh353PUtipGV6OF"
		const stringvUyP4mI = "t0yuWL8SSmVmcnbARn"
		const uintS8M5CiW = BigInt("1095")
		const ANRXTokens4KaSX6 = await ANRXToken.new(uintk2WlonP, stringf2DdN9I, stringvUyP4mI, uintS8M5CiW, {from: accounts[3]});
		const uintGf6jKNT = BigInt("668")
		const uintXIJBd6 = BigInt("1661")
		const uintS5eO4z = BigInt("1635")
		const addressPwEuB5f = "0x0000000000000000000000000000000000000001"
		const addressv4oEto4 = accounts[3]
		const addresst9xFJx7 = "0x0000000000000000000000000000000000000001"
		const addressGViO2BS = accounts[0]
		const addressCBtj0DJ = accounts[3]
		const addressuX1WPSH = accounts[2]
		const addressg1ZCEe = accounts[4]
		const uintBN7GnfP = await ANRXTokens4KaSX6.setParams.call(uintXIJBd6, uintGf6jKNT, {from: accounts[3]});
		const uintnTPeGn = await ANRXTokens4KaSX6.totalSupply.call({from: accounts[5]});
		const boolgQQl9KK = await ANRXTokens4KaSX6.transferFrom.call(addressv4oEto4, addressPwEuB5f, uintS5eO4z, {from: accounts[3]});
		const uintiuXXDYZ = await ANRXTokens4KaSX6.balanceOf.call(addresst9xFJx7, {from: accounts[2]});
		const uintWZ6gv70 = await ANRXTokens4KaSX6.allowance.call(addressCBtj0DJ, addressGViO2BS, {from: accounts[0]});
		const uintoiLvIPd = await ANRXTokens4KaSX6.allowance.call(addressg1ZCEe, addressuX1WPSH, {from: accounts[0]});

		await expect(ANRXTokens4KaSX6.setParams.call(uintXIJBd6, uintGf6jKNT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintKFzdVgI = BigInt("1767")
		const stringf5z1di = "QxJQtYHX9"
		const stringR61mqU9 = "uOASZxKsBhF2q9smGg6XmkdpFdQVDYcQbnFfL7llqcpeWYFCVbb15Y9jng61XdhibKaqiDsf0PGtq8pTb2sHVc"
		const uintgGqEtmP = BigInt("1170")
		const ANRXTokenib0hjRz = await ANRXToken.new(uintKFzdVgI, stringf5z1di, stringR61mqU9, uintgGqEtmP, {from: accounts[1]});
		const addressSDazq3R = "0x0000000000000000000000000000000000000001"
		const addressu2bveX0 = accounts[3]
		const uintnB1s7Ln = BigInt("759")
		const addressRzllMb9 = accounts[5]
		const uintY3aE7WT = await ANRXTokenib0hjRz.allowance.call(addressu2bveX0, addressSDazq3R, {from: accounts[1]});
		const uintlnCm30s = await ANRXTokenib0hjRz.issue.call(uintnB1s7Ln, {from: accounts[3]});
		const uintqccaez9 = await ANRXTokenib0hjRz.balanceOf.call(addressRzllMb9, {from: accounts[0]});
		const uintPq34CD8 = await ANRXTokenib0hjRz.totalSupply.call({from: accounts[4]});

		assert.equal(uintY3aE7WT, BigInt("0"))
		await expect(ANRXTokenib0hjRz.issue.call(uintnB1s7Ln, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintjxpuwhe = BigInt("1272")
		const stringAKUC4fs = "PCuiyrokekE4w7cRnTqu2e9vPTtnvE2ihYM9ll7nWMMoe32QLUwQWTt1fShxynbvBMtgKPl6j8COQl7SxGqEE6ArfHUCHPZCm9"
		const stringdtv40Eu = "UuROa4B2QBYkWlCuAFmLzCyDlrCr8p9QqtocrlwuFuT8Kt7gCUvx77UyEn637NzgABkmFH41Bo9XI786gkaEiRFFZ"
		const uintZKJ9hEl = BigInt("6")
		const ANRXTokenQxkuNs8 = await ANRXToken.new(uintjxpuwhe, stringAKUC4fs, stringdtv40Eu, uintZKJ9hEl, {from: accounts[2]});
		const addresspqlvhoV = "0x0000000000000000000000000000000000000002"
		const addresssWDHowC = accounts[4]
		const uintJdaQPVT = await ANRXTokenQxkuNs8.balanceOf.call(addresspqlvhoV, {from: accounts[1]});
		const addressL0WVRES = await ANRXTokenQxkuNs8.deprecate.call(addresssWDHowC, {from: accounts[2]});

		assert.equal(uintJdaQPVT, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintReJUys = BigInt("1553")
		const stringOZA9rNz = "G5CwqurMwmAmIz0xrKnxt"
		const stringNd9VsbM = "nbqSGL3sU"
		const uintgUROUdk = BigInt("884")
		const ANRXTokenQQN0U87 = await ANRXToken.new(uintReJUys, stringOZA9rNz, stringNd9VsbM, uintgUROUdk, {from: accounts[2]});
		const uintXtbSoNg = BigInt("1310")
		const uintqeUZHAL = await ANRXTokenQQN0U87.issue.call(uintXtbSoNg, {from: accounts[2]});
		const uintycCLedE = await ANRXTokenQQN0U87.totalSupply.call({from: accounts[4]});

		assert.equal(uintycCLedE, BigInt("1553"))
	});

	it('test for ANRXToken', async () => {
		const uintesHDr0P = BigInt("96")
		const stringwHnWdNB = "8t1nGMgDMAaUXUWVSjBzjR4pJtnGesSSyTWkaRhTnTHuPJkM1LS3cRqpEjDx8KeekTfYjrB7C37ddoGGJYnkCpe4LDy3"
		const stringOH7rVnX = "xNYqhmblqo47U9iqnBleBccKPgR"
		const uintGngXaOW = BigInt("1804")
		const ANRXTokencQ8WFjC = await ANRXToken.new(uintesHDr0P, stringwHnWdNB, stringOH7rVnX, uintGngXaOW, {from: accounts[1]});
		const uintLmel7aZ = BigInt("224")
		const addressjk8ZoQB = accounts[3]
		const uintWz33RHJ = BigInt("1526")
		const boolIeA7GfW = await ANRXTokencQ8WFjC.approve.call(addressjk8ZoQB, uintLmel7aZ, {from: accounts[1]});
		const uintMiuDMRd = await ANRXTokencQ8WFjC.redeem.call(uintWz33RHJ, {from: accounts[1]});

		assert.equal(boolIeA7GfW, true)
		await expect(ANRXTokencQ8WFjC.redeem.call(uintWz33RHJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintLIoMCaP = BigInt("1767")
		const stringf5z1di = "QxJQtYHX9"
		const stringR61mqU9 = "uOASZxKsBhF2q9smGg6XmkdpFdQVDYcQbnFfL7llqcpeWYFCVbb15Y9jng61XdhibKaqiDsf0PGtq8pTb2sHVc"
		const uintweRczC = BigInt("1170")
		const ANRXTokenib0hjRz = await ANRXToken.new(uintLIoMCaP, stringf5z1di, stringR61mqU9, uintweRczC, {from: accounts[1]});
		const uintq1nM2TD = BigInt("807")
		const addressdQfFG5s = "0x00000000000000000000000000000000000000-1"
		const addressaihwExf = accounts[0]
		const addresseYDVad = "0x0000000000000000000000000000000000000002"
		const uintQfrjvL1 = BigInt("1546")
		const addressFkAwEwg = accounts[3]
		const addressWMW1hPu = "0x0000000000000000000000000000000000000001"
		const addressAPv7RRS = accounts[3]
		const uintctjw3ph = BigInt("489")
		const addressSHuHgYH = accounts[1]
		const addressPq8LfVJ = "0x0000000000000000000000000000000000000001"
		const uintdj5RTF9 = BigInt("1454")
		const addressc1rzrS = accounts[1]
		const addresszB1fAB9 = accounts[3]
		const uintNkonYkI = BigInt("1620")
		const uinthswTYSJ = BigInt("923")
		const uintL0Ec0qL = BigInt("572")
		const addressMM3lAUY = accounts[4]
		const uintL3bZDPK = BigInt("1265")
		const addresshGsCxtL = accounts[1]
		const addresszQPsInb = accounts[0]
		const boolidFLiM3 = await ANRXTokenib0hjRz.approve.call(addressdQfFG5s, uintq1nM2TD, {from: accounts[3]});
		const uinttYzdas = await ANRXTokenib0hjRz.balanceOf.call(addressaihwExf, {from: accounts[0]});
		const uintVUofDFR = await ANRXTokenib0hjRz.balanceOf.call(addresseYDVad, {from: accounts[5]});
		const boolpchampF = await ANRXTokenib0hjRz.transfer.call(addressFkAwEwg, uintQfrjvL1, {from: accounts[1]});
		const uintY3aE7WT = await ANRXTokenib0hjRz.allowance.call(addressAPv7RRS, addressWMW1hPu, {from: accounts[1]});
		const boolQsuKS0P = await ANRXTokenib0hjRz.transferFrom.call(addressPq8LfVJ, addressSHuHgYH, uintctjw3ph, {from: accounts[0]});
		const boolYZNDpUs = await ANRXTokenib0hjRz.transferFrom.call(addresszB1fAB9, addressc1rzrS, uintdj5RTF9, {from: accounts[0]});
		const uintZbjEwlI = await ANRXTokenib0hjRz.totalSupply.call({from: accounts[5]});
		const uintbQRh7uH = await ANRXTokenib0hjRz.setParams.call(uinthswTYSJ, uintNkonYkI, {from: accounts[4]});
		const boolQg58Bjj = await ANRXTokenib0hjRz.approve.call(addressMM3lAUY, uintL0Ec0qL, {from: accounts[2]});
		const boolQN3rUr = await ANRXTokenib0hjRz.transferFrom.call(addresszQPsInb, addresshGsCxtL, uintL3bZDPK, {from: accounts[0]});
		const uintPq34CD8 = await ANRXTokenib0hjRz.totalSupply.call({from: accounts[4]});

		await expect(ANRXTokenib0hjRz.approve.call(addressdQfFG5s, uintq1nM2TD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})