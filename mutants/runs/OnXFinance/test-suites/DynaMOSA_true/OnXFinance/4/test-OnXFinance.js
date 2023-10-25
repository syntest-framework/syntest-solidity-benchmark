const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringlWUEjaL = "WR7Xl4GJt11E9kntaQqEil7icEsKpTj184ccPyUdNzOMZSxKZuh7cvPTkeJ3czzRxio37H7IOZB1y"
		const stringESpHod6 = "tGKKgTeOwydwaAESmaE9ltgnz82ueyeKsfDsCEN7mkrRbyBD6juYoasGdcU5alwunEkp4adgopXXZt6KQ3WE4BGC"
		const uintMbs4aXI = BigInt("250")
		const OnXFinanceK42J3t = await OnXFinance.new(stringlWUEjaL, stringESpHod6, uintMbs4aXI, {from: accounts[0]});
		const addressUv4cnW0 = accounts[0]
		const uinthPH2EMD = BigInt("543")
		const addressF2ECyiM = accounts[3]
		const uintilacfdx = BigInt("944")
		const addressZ5FxEqv = accounts[2]
		const addressU1Rx1rX = accounts[0]
		const uintYSr9PLF = await OnXFinanceK42J3t.balanceOf.call(addressUv4cnW0, {from: accounts[4]});
		const stringeR9jBL = await OnXFinanceK42J3t.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringBe6BzFW = await OnXFinanceK42J3t.symbol.call({from: accounts[4]});
		const booliJFFZFy = await OnXFinanceK42J3t.increaseAllowance.call(addressF2ECyiM, uinthPH2EMD, {from: accounts[4]});
		const boolnDoikRz = await OnXFinanceK42J3t.transferFrom.call(addressU1Rx1rX, addressZ5FxEqv, uintilacfdx, {from: accounts[2]});

		assert.equal(stringBe6BzFW, "tGKKgTeOwydwaAESmaE9ltgnz82ueyeKsfDsCEN7mkrRbyBD6juYoasGdcU5alwunEkp4adgopXXZt6KQ3WE4BGC")
		assert.equal(stringeR9jBL, "WR7Xl4GJt11E9kntaQqEil7icEsKpTj184ccPyUdNzOMZSxKZuh7cvPTkeJ3czzRxio37H7IOZB1y")
		assert.equal(uintYSr9PLF, BigInt("250000000000000000000"))
		await expect(OnXFinanceK42J3t.increaseAllowance.call(addressF2ECyiM, uinthPH2EMD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringW229H4G = "j4l7pGLwli2jSjRzr4HSzBn4MXxrPMYNKA"
		const stringwo30Nkb = "roOtivwpCUq3LZxAbqrGP5RYE4Myq3BusXdC7Uke3XKwJv3ixFKLi5GtHjXaYGCRI5GUto4reairh3Lj"
		const uinty6mFpoc = BigInt("97")
		const OnXFinanceTXP3dQc = await OnXFinance.new(stringW229H4G, stringwo30Nkb, uinty6mFpoc, {from: accounts[3]});
		const addressp9l8odn = accounts[2]
		const address7k8XQ3 = accounts[1]
		const addressAChtTO = accounts[5]
		const addressSzD3Hds = accounts[3]
		const uintfUf1N9Q = BigInt("1640")
		const addresszJiMywP = "0x0000000000000000000000000000000000000001"
		const addressqLdeoaI = accounts[0]
		const uint5ayts5 = BigInt("1984")
		const addressH0jsH03 = accounts[2]
		const uintPJlDxMr = await OnXFinanceTXP3dQc.allowance.call(address7k8XQ3, addressp9l8odn, {from: accounts[0]});
		const uintJYjIia3 = await OnXFinanceTXP3dQc.allowance.call(addressSzD3Hds, addressAChtTO, {from: accounts[0]});
		const boolJfczqI = await OnXFinanceTXP3dQc.transferFrom.call(addressqLdeoaI, addresszJiMywP, uintfUf1N9Q, {from: accounts[5]});
		const boolfTlvN3Q = await OnXFinanceTXP3dQc.approve.call(addressH0jsH03, uint5ayts5, {from: accounts[2]});

		assert.equal(uintJYjIia3, BigInt("0"))
		assert.equal(uintPJlDxMr, BigInt("0"))
		await expect(OnXFinanceTXP3dQc.transferFrom.call(addressqLdeoaI, addresszJiMywP, uintfUf1N9Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringQtx1Ax = "PJGRw5ANSMXGhUkknLzLFyQqu"
		const stringKQ6lXqH = "AgyZZWDVxOahSWkK3Gj8pehmF2iqSfZPpsG7UK9CSbBBhILG"
		const uintmcIxMw = BigInt("143")
		const OnXFinanceMZaUrsU = await OnXFinance.new(stringQtx1Ax, stringKQ6lXqH, uintmcIxMw, {from: accounts[3]});
		const uintL6I3E6Z = BigInt("356")
		const addressI14Ma5S = accounts[3]
		const uintr4JWYto = BigInt("1931")
		const addressSieFZSO = accounts[1]
		const stringQ8g4eFA = await OnXFinanceMZaUrsU.symbol.call({from: accounts[2]});
		const boolWPgp8s = await OnXFinanceMZaUrsU.transfer.call(addressI14Ma5S, uintL6I3E6Z, {from: "0x0000000000000000000000000000000000000001"});
		const stringy27p7cx = await OnXFinanceMZaUrsU.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolLt8fpz4 = await OnXFinanceMZaUrsU.approve.call(addressSieFZSO, uintr4JWYto, {from: accounts[4]});

		assert.equal(stringQ8g4eFA, "AgyZZWDVxOahSWkK3Gj8pehmF2iqSfZPpsG7UK9CSbBBhILG")
		await expect(OnXFinanceMZaUrsU.transfer.call(addressI14Ma5S, uintL6I3E6Z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringE25yJHQ = "To9rLNqKF0hdRDoDZET1YgOY4OcK5l8KE89697sLcaGabqhNyz4lI6qXH38bjm3CbxErqHuJsKj2wdQ4298esH"
		const stringjScMzbn = "QqpF2QDYRnBA3I2eh5KkPX0OR2zxjGUtTKYDQJyn8kGNaHDO8YDkCnfGEC5XGguCuWtHkygbIimN1GKs"
		const uintPF8hGwc = BigInt("4")
		const OnXFinanceIsGkmTW = await OnXFinance.new(stringE25yJHQ, stringjScMzbn, uintPF8hGwc, {from: accounts[3]});
		const uint4hoz1H = BigInt("327")
		const addressspYLC5z = accounts[3]
		const uintHMbTgED = BigInt("1696")
		const addressJ51GUai = accounts[2]
		const uintNeMxXRx = await OnXFinanceIsGkmTW.totalSupply.call({from: accounts[3]});
		const boolr3CZTsF = await OnXFinanceIsGkmTW.approveAndCall.call(addressspYLC5z, uint4hoz1H, {from: accounts[3]});
		const boolic0jBIJ = await OnXFinanceIsGkmTW.increaseAllowance.call(addressJ51GUai, uintHMbTgED, {from: accounts[1]});

		assert.equal(boolr3CZTsF, true)
		assert.equal(uintNeMxXRx, BigInt("4000000000000000000"))
		await expect(OnXFinanceIsGkmTW.increaseAllowance.call(addressJ51GUai, uintHMbTgED, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringQLJCKk = "EoVTdTRSyrs6skBi6gJVpJ5BXMvppNWdj2Y8MCCiGxR5DCLetdx"
		const stringoDGhFkv = "WSUsMy6P36RrHBOIAKvOrig4NGESf"
		const uintsqG6EA0 = BigInt("165")
		const OnXFinance0HWKJN = await OnXFinance.new(stringQLJCKk, stringoDGhFkv, uintsqG6EA0, {from: accounts[4]});
		const uintHDspF8j = BigInt("1945")
		const addresssoPCDKb = accounts[3]
		const addressOkm2L7W = accounts[3]
		const addressvC9jzj = accounts[2]
		const uintQjbCcp8 = BigInt("841")
		const addressvhx0iD = accounts[0]
		const boolcOwQu7 = await OnXFinance0HWKJN.transfer.call(addresssoPCDKb, uintHDspF8j, {from: accounts[4]});
		const uintCxpSaOa = await OnXFinance0HWKJN.allowance.call(addressvC9jzj, addressOkm2L7W, {from: accounts[4]});
		const boolc3uVvhO = await OnXFinance0HWKJN.transfer.call(addressvhx0iD, uintQjbCcp8, {from: accounts[0]});

		assert.equal(boolcOwQu7, true)
		assert.equal(uintCxpSaOa, BigInt("0"))
		await expect(OnXFinance0HWKJN.transfer.call(addressvhx0iD, uintQjbCcp8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringLSvoz7b = "fNC7UcroXbQkm9wAcGQwHUiIaQvCboPtRyKWRblibcfLsowGSCqtmXNB7aRn9PT3wJXcx"
		const stringKqW3DC7 = "MgelJOErTXPwu4II5z5TjPf"
		const uintyTrmmJd = BigInt("182")
		const OnXFinanceKDueVRH = await OnXFinance.new(stringLSvoz7b, stringKqW3DC7, uintyTrmmJd, {from: "0x0000000000000000000000000000000000000001"});
		const addresss2S3nHi = accounts[0]
		const addressZkjn7IF = accounts[1]
		const addressfg7qAff = accounts[5]
		const uintapBmeFG = await OnXFinanceKDueVRH.balanceOf.call(addresss2S3nHi, {from: accounts[4]});
		const uint8N1cGc6a = await OnXFinanceKDueVRH.decimals.call({from: accounts[3]});
		const uintPvuqq15 = await OnXFinanceKDueVRH.allowance.call(addressfg7qAff, addressZkjn7IF, {from: accounts[4]});
		const uint8Q9BIwL = await OnXFinanceKDueVRH.decimals.call({from: accounts[1]});
	});

	it('test for OnXFinance', async () => {
		const stringQtx1Ax = "PJGRw5ANSMXGhUkknLzLFyQqu"
		const stringKQ6lXqH = "AgyZZWDVxOahSWkK3Gj8pehmF2iqSfZPpsG7UK9CSbBBhILG"
		const uintp5b5oLN = BigInt("143")
		const OnXFinanceMZaUrsU = await OnXFinance.new(stringQtx1Ax, stringKQ6lXqH, uintp5b5oLN, {from: accounts[3]});
		const uintLdMpcMM = BigInt("1217")
		const addressILQz8o = accounts[0]
		const uintmtXqa29 = BigInt("1931")
		const addressewY5yVr = accounts[1]
		const stringQ8g4eFA = await OnXFinanceMZaUrsU.symbol.call({from: accounts[2]});
		const boolfP4Rnd4 = await OnXFinanceMZaUrsU.approve.call(addressILQz8o, uintLdMpcMM, {from: accounts[0]});
		const stringy27p7cx = await OnXFinanceMZaUrsU.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolLt8fpz4 = await OnXFinanceMZaUrsU.approve.call(addressewY5yVr, uintmtXqa29, {from: accounts[4]});

		assert.equal(boolLt8fpz4, true)
		assert.equal(boolfP4Rnd4, true)
		assert.equal(stringQ8g4eFA, "AgyZZWDVxOahSWkK3Gj8pehmF2iqSfZPpsG7UK9CSbBBhILG")
		assert.equal(stringy27p7cx, "AgyZZWDVxOahSWkK3Gj8pehmF2iqSfZPpsG7UK9CSbBBhILG")
	});

	it('test for OnXFinance', async () => {
		const stringE25yJHQ = "To9rLNqKF0hdRDoDZET1YgOY4OcK5l8KE89697sLcaGabqhNyz4lI6qXH38bjm3CbxErqHuJsKj2wdQ4298esH"
		const stringjScMzbn = "QqpF2QDYRnBA3I2eh5KkPX0OR2zxjGUtTKYDQJyn8kGNaHDO8YDkCnfGEC5XGguCuWtHkygbIimN1GKs"
		const uinta5fqYZX = BigInt("4")
		const OnXFinanceIsGkmTW = await OnXFinance.new(stringE25yJHQ, stringjScMzbn, uinta5fqYZX, {from: accounts[3]});
		const addressme3gnP2 = accounts[5]
		const uintrBxwPuI = BigInt("97")
		const addresskoSX0mx = accounts[1]
		const uintGQfjOi = BigInt("1696")
		const addresse0miWj0 = accounts[2]
		const uintNeMxXRx = await OnXFinanceIsGkmTW.totalSupply.call({from: accounts[3]});
		const boolns8N0So = await OnXFinanceIsGkmTW.transferownership.call(addressme3gnP2, {from: accounts[1]});
		const boolQjyffLO = await OnXFinanceIsGkmTW.approveAndCall.call(addresskoSX0mx, uintrBxwPuI, {from: accounts[4]});
		const boolic0jBIJ = await OnXFinanceIsGkmTW.increaseAllowance.call(addresse0miWj0, uintGQfjOi, {from: accounts[1]});

		assert.equal(uintNeMxXRx, BigInt("4000000000000000000"))
		await expect(OnXFinanceIsGkmTW.transferownership.call(addressme3gnP2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringGb3FbCH = "bmSudJ45b0fw5IWX8EDjj3Z7oWPICeLfiZdrQM6efNgJwT81uzvZKiRV8KQC6Jcz1lPsnwyBJ9gS9kxb0xbhM2"
		const stringaes2MWB = "ctfLQ8NP0tCw2sH8dDHPXJtHwECXzIeogQnWKNgr5e6mUiMB6TAXhGQ9x2UC1nlFMada"
		const uintiTUmTZF = BigInt("270")
		const OnXFinancehyjhxub = await OnXFinance.new(stringGb3FbCH, stringaes2MWB, uintiTUmTZF, {from: accounts[2]});
		const uintJwVb6hJ = BigInt("1400")
		const addressv94cSU = accounts[0]
		const uintItOHMCq = BigInt("0")
		const addressNVjRCbi = accounts[4]
		const boolwIkHy5d = await OnXFinancehyjhxub.approve.call(addressv94cSU, uintJwVb6hJ, {from: accounts[0]});
		const boolGIWO5I = await OnXFinancehyjhxub.transfer.call(addressNVjRCbi, uintItOHMCq, {from: accounts[1]});

		assert.equal(boolGIWO5I, true)
		assert.equal(boolwIkHy5d, true)
	});

	it('test for OnXFinance', async () => {
		const stringE25yJHQ = "To9rLNqKF0hdRDoDZET1YgOY4OcK5l8KE89697sLcaGabqhNyz4lI6qXH38bjm3CbxErqHuJsKj2wdQ4298esH"
		const stringjScMzbn = "QqpF2QDYRnBA3I2eh5KkPX0OR2zxjGUtTKYDQJyn8kGNaHDO8YDkCnfGEC5XGguCuWtHkygbIimN1GKs"
		const uinttCI6NH = BigInt("4")
		const OnXFinanceIsGkmTW = await OnXFinance.new(stringE25yJHQ, stringjScMzbn, uinttCI6NH, {from: accounts[3]});
		const uintH0MYSoN = BigInt("579")
		const addressOkEPDG0 = accounts[3]
		const uintsgSlmN = BigInt("1611")
		const addressjSKZkx = accounts[4]
		const addressClMGRj = accounts[10]
		const uint8cJI0BKY = await OnXFinanceIsGkmTW.decimals.call({from: accounts[0]});
		const boolKm1fb50 = await OnXFinanceIsGkmTW.approve.call(addressOkEPDG0, uintH0MYSoN, {from: accounts[2]});
		const booldx9FNLV = await OnXFinanceIsGkmTW.transfer.call(addressjSKZkx, uintsgSlmN, {from: accounts[3]});
		const stringdEvtXQz = await OnXFinanceIsGkmTW.symbol.call({from: accounts[1]});
		const boolns8N0So = await OnXFinanceIsGkmTW.transferownership.call(addressClMGRj, {from: accounts[1]});

		assert.equal(boolKm1fb50, true)
		assert.equal(booldx9FNLV, true)
		assert.equal(stringdEvtXQz, "QqpF2QDYRnBA3I2eh5KkPX0OR2zxjGUtTKYDQJyn8kGNaHDO8YDkCnfGEC5XGguCuWtHkygbIimN1GKs")
		assert.equal(uint8cJI0BKY, BigInt("18"))
		await expect(OnXFinanceIsGkmTW.transferownership.call(addressClMGRj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringE25yJHQ = "To9rLNqKF0hdRDoDZET1YgOY4OcK5l8KE89697sLcaGabqhNyz4lI6qXH38bjm3CbxErqHuJsKj2wdQ4298esH"
		const stringjScMzbn = "QqpF2QDYRnBA3I2eh5KkPX0OR2zxjGUtTKYDQJyn8kGNaHDO8YDkCnfGEC5XGguCuWtHkygbIimN1GKs"
		const uintJPk8XIU = BigInt("4")
		const OnXFinanceIsGkmTW = await OnXFinance.new(stringE25yJHQ, stringjScMzbn, uintJPk8XIU, {from: accounts[3]});
		const addressPDCCCCw = accounts[0]
		const uintKz6H7mT = BigInt("1661")
		const addressX8eIIX4 = accounts[5]
		const addressQ7BNNvi = accounts[5]
		const booloPw14tt = await OnXFinanceIsGkmTW.transferownership.call(addressPDCCCCw, {from: accounts[3]});
		const boolfZiw4ys = await OnXFinanceIsGkmTW.approveAndCall.call(addressX8eIIX4, uintKz6H7mT, {from: accounts[3]});
		const boolns8N0So = await OnXFinanceIsGkmTW.transferownership.call(addressQ7BNNvi, {from: accounts[1]});

		assert.equal(boolfZiw4ys, true)
		assert.equal(booloPw14tt, true)
		await expect(OnXFinanceIsGkmTW.transferownership.call(addressQ7BNNvi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})