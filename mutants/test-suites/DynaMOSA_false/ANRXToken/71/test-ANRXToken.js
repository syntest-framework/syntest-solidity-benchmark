const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintfQGmY4 = BigInt("1419")
		const stringfbFc4tl = "7XhXyqDRufeop2TooomraAK8l3H36cKYUEopt308DnMiUl9LknyFUC"
		const stringinPmhFd = "h4lrTQjGXc1tf8G8NJeIT3aWggW8tNwb18lyowm5cYGTKhjgJkO"
		const uintsCA8sVl = BigInt("332")
		const ANRXTokenPydIz4G = await ANRXToken.new(uintfQGmY4, stringfbFc4tl, stringinPmhFd, uintsCA8sVl, {from: accounts[3]});
		const uintlATtwst = BigInt("174")
		const addressCQejpXd = accounts[2]
		const addressLzn2bEa = accounts[0]
		const uintxQmvaiG = BigInt("2000")
		const addressRmAfnF0 = accounts[3]
		const uinte6kPPH0 = BigInt("990")
		const addressQz5lqt = accounts[2]
		const addresssXqvDa2 = accounts[4]
//		const boollcTHk3W = await ANRXTokenPydIz4G.transferFrom.call(addressLzn2bEa, addressCQejpXd, uintlATtwst, {from: accounts[1]});
//		const uintZVHGdCJ = await ANRXTokenPydIz4G.issue.call(uintxQmvaiG, {from: accounts[3]});
//		const addressOEm1eLx = await ANRXTokenPydIz4G.deprecate.call(addressRmAfnF0, {from: accounts[2]});
//		const boolnpE5me0 = await ANRXTokenPydIz4G.transfer.call(addressQz5lqt, uinte6kPPH0, {from: accounts[4]});
//		const uintjIIA2SP = await ANRXTokenPydIz4G.balanceOf.call(addresssXqvDa2, {from: accounts[4]});

		await expect(ANRXTokenPydIz4G.transferFrom.call(addressLzn2bEa, addressCQejpXd, uintlATtwst, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintLgaw2Ja = BigInt("2009")
		const stringcWQ6Uns = "hcbCf4Fvx70bwvdUSy8DpxiMvXysv9f6ezg2yVLynqe7HpSFg7B4QgQzvJ0Vd1Mrm9V"
		const stringqzTIFfY = "NXpfTf"
		const uintWKJYVff = BigInt("1180")
		const ANRXTokentVP4fWB = await ANRXToken.new(uintLgaw2Ja, stringcWQ6Uns, stringqzTIFfY, uintWKJYVff, {from: accounts[3]});
		const uintSqJOBnF = BigInt("284")
		const addressf4ntg47 = accounts[0]
		const uintAVWaJO6 = BigInt("1554")
		const uintF3lRbYV = BigInt("581")
		const addressNX7uSqg = accounts[0]
		const uintTYhZuNo = await ANRXTokentVP4fWB.totalSupply.call({from: accounts[1]});
//		const boolHdKgvm = await ANRXTokentVP4fWB.transfer.call(addressf4ntg47, uintSqJOBnF, {from: accounts[1]});
//		const uintGoRKRHd = await ANRXTokentVP4fWB.issue.call(uintAVWaJO6, {from: accounts[0]});
//		const uintAabRZCP = await ANRXTokentVP4fWB.issue.call(uintF3lRbYV, {from: accounts[5]});
//		const uintGimCD7l = await ANRXTokentVP4fWB.balanceOf.call(addressNX7uSqg, {from: accounts[4]});

		assert.equal(uintTYhZuNo, BigInt("2009"))
		await expect(ANRXTokentVP4fWB.transfer.call(addressf4ntg47, uintSqJOBnF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintnx3rqrh = BigInt("805")
		const stringCHRdaif = "gtxfE"
		const stringqLsvbS5 = "EEhUGjXxXa061urVcelcgWzTbtmos3Qb9W9YoCARrLViUF1vfCf2CUWdCMyaPyHVcHFmEP"
		const uintvwgAmy1 = BigInt("1056")
		const ANRXTokenTK6fw0U = await ANRXToken.new(uintnx3rqrh, stringCHRdaif, stringqLsvbS5, uintvwgAmy1, {from: accounts[1]});
		const addressMUuYzo4 = accounts[3]
		const addressA3lnBrm = accounts[2]
		const uintgp28qur = BigInt("620")
		const addressWf3BVMx = accounts[2]
//		const addressfOhL1lg = await ANRXTokenTK6fw0U.deprecate.call(addressMUuYzo4, {from: accounts[0]});
//		const uintDCrsh0 = await ANRXTokenTK6fw0U.balanceOf.call(addressA3lnBrm, {from: accounts[0]});
//		const uintrmkPZFZ = await ANRXTokenTK6fw0U.totalSupply.call({from: accounts[2]});
//		const boolQJK9EVT = await ANRXTokenTK6fw0U.transfer.call(addressWf3BVMx, uintgp28qur, {from: accounts[0]});

		await expect(ANRXTokenTK6fw0U.deprecate.call(addressMUuYzo4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintlAy75n = BigInt("1608")
		const stringhPDhKix = "TVGqhrzOkakEBiWWjotCNSKl"
		const stringDb2YFUf = "8SLswIDThRxyHg8WKRfErMkNPSGs8Kl85JlOnupGRox017gaUKXIAB31psKvDrxvpghOU3LQs"
		const uintVqaxbpZ = BigInt("1037")
		const ANRXTokenpdAL8Mq = await ANRXToken.new(uintlAy75n, stringhPDhKix, stringDb2YFUf, uintVqaxbpZ, {from: accounts[5]});
		const uintyXN0oGC = BigInt("1795")
		const uint7Gbm2m = BigInt("33")
		const uintFgdjUa4 = BigInt("316")
		const addressuedQRhr = accounts[4]
		const uintJcrSuvb = BigInt("1196")
		const uintJNTuID8 = BigInt("1655")
		const uintOd1xrb = await ANRXTokenpdAL8Mq.issue.call(uintyXN0oGC, {from: accounts[5]});
//		const uintVCCNxJS = await ANRXTokenpdAL8Mq.redeem.call(uint7Gbm2m, {from: accounts[0]});
//		const uintLtKwFJX = await ANRXTokenpdAL8Mq.totalSupply.call({from: accounts[2]});
//		const boolNW9uZLj = await ANRXTokenpdAL8Mq.transfer.call(addressuedQRhr, uintFgdjUa4, {from: accounts[1]});
//		const uintH8JJ4HF = await ANRXTokenpdAL8Mq.setParams.call(uintJNTuID8, uintJcrSuvb, {from: accounts[4]});

		await expect(ANRXTokenpdAL8Mq.redeem.call(uint7Gbm2m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintaqpo4Ak = BigInt("413")
		const stringvcEDA8T = "10JmrGA0VOmMH79yqDz2BTuL8F6wR1vdiJV7LUnupIDuFLzoYgLKR744ATAbFcgzTikN4TjrrSKa5w78yg78"
		const stringMQrOUaU = "TTt3AyWzEFYdj4GZgT6wapNX93xiEFryROjeZppZjzUbXCg56vXhLp1LWforttvu1NbhvPSpw2xVsgnKI"
		const uintimjM009 = BigInt("1819")
		const ANRXTokenpZeoUJc = await ANRXToken.new(uintaqpo4Ak, stringvcEDA8T, stringMQrOUaU, uintimjM009, {from: accounts[5]});
		const uintLefqkFD = BigInt("1268")
		const addressmHpYGI = accounts[1]
		const addressj9TxUJP = accounts[0]
		const uintZsBHOuz = BigInt("1341")
		const boolxaXK5sq = await ANRXTokenpZeoUJc.approve.call(addressmHpYGI, uintLefqkFD, {from: accounts[5]});
		const uintyF6cva5 = await ANRXTokenpZeoUJc.balanceOf.call(addressj9TxUJP, {from: accounts[2]});
//		const uintFDInYMT = await ANRXTokenpZeoUJc.issue.call(uintZsBHOuz, {from: accounts[2]});

		assert.equal(boolxaXK5sq, true)
		assert.equal(uintyF6cva5, BigInt("0"))
		await expect(ANRXTokenpZeoUJc.issue.call(uintZsBHOuz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintIdqXkKJ = BigInt("1207")
		const stringXdRciAa = "qhN5CnbZKe76B8kjyXKHE7LWo8YJVcAH4lKzwCzf"
		const stringa3E0Znl = "vBBIpqn25hVDwmar7j9EzGoVgLPvyBMXMP2zxZ3qEWKTxFVwtppx7v1X0Mud5ld3oGL6kP6PlAtFFy88nb2JT7uu"
		const uintLIKcl0q = BigInt("1455")
		const ANRXTokennZOiSDD = await ANRXToken.new(uintIdqXkKJ, stringXdRciAa, stringa3E0Znl, uintLIKcl0q, {from: accounts[1]});
		const addressstAkWLC = accounts[0]
		const addresswsgrApQ = accounts[3]
		const uintnYIFV1d = BigInt("1034")
		const uintKmaZxn = await ANRXTokennZOiSDD.allowance.call(addresswsgrApQ, addressstAkWLC, {from: accounts[2]});
//		const uintSFJvhOV = await ANRXTokennZOiSDD.issue.call(uintnYIFV1d, {from: accounts[4]});
//		const uintepV8XwJ = await ANRXTokennZOiSDD.totalSupply.call({from: accounts[4]});

		assert.equal(uintKmaZxn, BigInt("0"))
		await expect(ANRXTokennZOiSDD.issue.call(uintnYIFV1d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintm5Vw8p = BigInt("806")
		const stringHqVay9H = "IiXL94JalyajjBuu89Eg8pTaRJpW6BkRtA1PcsenCTwLr8cGekYhknObukFsyTRdURB4EvUNyeVgjl"
		const stringKUXUCLG = "BPA"
		const uintpBNFsW1 = BigInt("490")
		const ANRXTokenVgSz47H = await ANRXToken.new(uintm5Vw8p, stringHqVay9H, stringKUXUCLG, uintpBNFsW1, {from: accounts[3]});
		const addresskWTxj4G = accounts[1]
		const uintsU2jyj0 = BigInt("1097")
		const uintAim4rnM = BigInt("687")
		const addressW3Ssvqa = accounts[0]
		const uintU4ivZcI = BigInt("159")
		const uintSXSeacu = BigInt("949")
		const addressjQkJ2nJ = accounts[0]
		const uintCaLW7AC = await ANRXTokenVgSz47H.balanceOf.call(addresskWTxj4G, {from: accounts[3]});
//		const uintB91xJW = await ANRXTokenVgSz47H.redeem.call(uintsU2jyj0, {from: accounts[3]});
//		const uintAcaN4EM = await ANRXTokenVgSz47H.issue.call(uintAim4rnM, {from: accounts[0]});
//		const uinttoB2Fj8 = await ANRXTokenVgSz47H.balanceOf.call(addressW3Ssvqa, {from: accounts[4]});
//		const uintXPK22Gq = await ANRXTokenVgSz47H.issue.call(uintU4ivZcI, {from: accounts[1]});
//		const boolAsnBbv1 = await ANRXTokenVgSz47H.approve.call(addressjQkJ2nJ, uintSXSeacu, {from: accounts[2]});

		assert.equal(uintCaLW7AC, BigInt("0"))
		await expect(ANRXTokenVgSz47H.redeem.call(uintsU2jyj0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintOoI61Co = BigInt("862")
		const stringtf9t7hj = "YBQfdMo7WKmdOfUxqO63zmaDAnwPLvkF8tn4xpyRCkidisb86Y43ASfLki453HcAWWGn7V66v37cCLvbzMJl73OZIdjcpP"
		const stringoxRoJR = "SCxNMev3TePk1UWe"
		const uintUDyjJI = BigInt("558")
		const ANRXTokenYZheTm = await ANRXToken.new(uintOoI61Co, stringtf9t7hj, stringoxRoJR, uintUDyjJI, {from: "0x0000000000000000000000000000000000000001"});
		const uintZDkad3W = BigInt("151")
		const addresst5EF3cI = accounts[4]
		const addressGZgC9OS = accounts[0]
		const uintn3kz5DO = BigInt("1679")
		const addressN36Skx1 = accounts[2]
		const uintXAsDxnC = BigInt("394")
		const uintI5Lv3G = BigInt("1114")
		const uintNzHbKrF = BigInt("2045")
		const boolDYJAEpN = await ANRXTokenYZheTm.transferFrom.call(addressGZgC9OS, addresst5EF3cI, uintZDkad3W, {from: accounts[3]});
		const uintUj7uUQ8 = await ANRXTokenYZheTm.totalSupply.call({from: accounts[1]});
		const boolJPUU6Sl = await ANRXTokenYZheTm.approve.call(addressN36Skx1, uintn3kz5DO, {from: accounts[2]});
		const uintPQCJGI2 = await ANRXTokenYZheTm.redeem.call(uintXAsDxnC, {from: accounts[4]});
		const uintCjyXxZ9 = await ANRXTokenYZheTm.setParams.call(uintNzHbKrF, uintI5Lv3G, {from: accounts[3]});
		const uintgD1YfkZ = await ANRXTokenYZheTm.totalSupply.call({from: accounts[3]});
	});

	it('test for ANRXToken', async () => {
		const uintun2NO22 = BigInt("1207")
		const stringXdRciAa = "qhN5CnbZKe76B8kjyXKHE7LWo8YJVcAH4lKzwCzf"
		const stringa3E0Znl = "vBBIpqn25hVDwmar7j9EzGoVgLPvyBMXMP2zxZ3qEWKTxFVwtppx7v1X0Mud5ld3oGL6kP6PlAtFFy88nb2JT7uu"
		const uintUqaYo1H = BigInt("1455")
		const ANRXTokennZOiSDD = await ANRXToken.new(uintun2NO22, stringXdRciAa, stringa3E0Znl, uintUqaYo1H, {from: accounts[1]});
		const addresscl89S7A = accounts[0]
		const addressngsYEK7 = accounts[4]
		const addressOuXIiP = accounts[3]
		const uintZVm422U = BigInt("1564")
		const addressqWPLlYG = accounts[1]
		const uintKmaZxn = await ANRXTokennZOiSDD.allowance.call(addressngsYEK7, addresscl89S7A, {from: accounts[2]});
		const addressXVhkKrA = await ANRXTokennZOiSDD.deprecate.call(addressOuXIiP, {from: accounts[1]});
//		const booln6afL7l = await ANRXTokennZOiSDD.transfer.call(addressqWPLlYG, uintZVm422U, {from: accounts[2]});

		assert.equal(uintKmaZxn, BigInt("0"))
		await expect(ANRXTokennZOiSDD.transfer.call(addressqWPLlYG, uintZVm422U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintEHxjdI = BigInt("1224")
		const stringD5ycApD = "cFFoHanj66At9xt2KvEKVTB85RmXIadSTIS5CoB1sLooc"
		const stringMYYD2R4 = "zo1UjsqNxwbTRQXDoJnMaMLRFOhfWkw1OCCngWBIyiMpbjDgKTrtWe0QFgh5xSkW41PFTM"
		const uintuel1qlS = BigInt("1801")
		const ANRXTokenq1lLNV8 = await ANRXToken.new(uintEHxjdI, stringD5ycApD, stringMYYD2R4, uintuel1qlS, {from: accounts[3]});
		const uintwKOQbA = BigInt("1159")
		const uintvm0p79W = BigInt("619")
		const addressmTrV4MW = accounts[2]
		const uintlKfDqeS = BigInt("1408")
		const uintca2MD39 = BigInt("193")
//		const uintD1lNL1y = await ANRXTokenq1lLNV8.setParams.call(uintvm0p79W, uintwKOQbA, {from: accounts[3]});
//		const uintQgXumF = await ANRXTokenq1lLNV8.balanceOf.call(addressmTrV4MW, {from: accounts[2]});
//		const uintaXpvpF = await ANRXTokenq1lLNV8.redeem.call(uintlKfDqeS, {from: accounts[3]});
//		const uintdhtamTF = await ANRXTokenq1lLNV8.issue.call(uintca2MD39, {from: accounts[0]});

		await expect(ANRXTokenq1lLNV8.setParams.call(uintvm0p79W, uintwKOQbA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})