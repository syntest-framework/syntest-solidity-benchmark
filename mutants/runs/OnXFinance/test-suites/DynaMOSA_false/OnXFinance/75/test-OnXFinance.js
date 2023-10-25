const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringXsakUhp = "KTkBHvlMfw4iJ36G4yUlQbkXbqdc12WSkLboxCTqtpHcFha3ELtp39W0aBXyP5L26vBvTQF3baQx6sUMyin"
		const stringe1CMMGv = "AR8nMKbEaunvvExAz"
		const uintuXpZLyF = BigInt("937")
		const OnXFinancerHW5h3N = await OnXFinance.new(stringXsakUhp, stringe1CMMGv, uintuXpZLyF, {from: accounts[0]});
		const uintePw6jz = BigInt("1940")
		const addresswohOP6 = accounts[0]
		const uintNlWecZ = BigInt("1781")
		const addressHFYs0Fp = accounts[3]
		const uintAJRlSR3 = BigInt("479")
		const addressp1DtQVp = accounts[2]
		const boolYCdTnW2 = await OnXFinancerHW5h3N.increaseAllowance.call(addresswohOP6, uintePw6jz, {from: accounts[0]});
		const boolWZH8Lhf = await OnXFinancerHW5h3N.approveAndCall.call(addressHFYs0Fp, uintNlWecZ, {from: accounts[1]});
		const stringXRXSDdJ = await OnXFinancerHW5h3N.name.call({from: accounts[4]});
		const stringVH9zdiv = await OnXFinancerHW5h3N.symbol.call({from: accounts[2]});
		const boolZ0YTnsm = await OnXFinancerHW5h3N.approve.call(addressp1DtQVp, uintAJRlSR3, {from: accounts[2]});

		await expect(OnXFinancerHW5h3N.increaseAllowance.call(addresswohOP6, uintePw6jz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringroWKHEG = "yrD63BrdsO9xcDqdhD7wPAVW93jgoQG5DMlYzfG4NLCjjVhmpAyXqWj"
		const stringSyYcZRo = "U8VegbQChRphFeyaeOlTuEem2OYtHjLSCVhLHXsw8DQYwb31RGsaYIFX"
		const uinty4A4SRO = BigInt("2045")
		const OnXFinanceiTDkLy = await OnXFinance.new(stringroWKHEG, stringSyYcZRo, uinty4A4SRO, {from: accounts[0]});
		const uintTiPk8ic = BigInt("1807")
		const addressxjsxMNI = accounts[0]
		const addressRyZvxDi = accounts[5]
		const uintc57FMKL = BigInt("358")
		const addressDzdZaDH = accounts[2]
		const addressD096Bi4 = accounts[1]
		const addresszZ4GUpA = accounts[4]
		const addressdnlu3t1 = accounts[0]
		const uintGUqaQe = BigInt("1999")
		const addressy1zb6gg = accounts[2]
		const addressF6ps29X = accounts[3]
		const address7MLWiL = "0x0000000000000000000000000000000000000001"
		const boolQzktza2 = await OnXFinanceiTDkLy.transferFrom.call(addressRyZvxDi, addressxjsxMNI, uintTiPk8ic, {from: accounts[4]});
		const booluLXYbm = await OnXFinanceiTDkLy.transferFrom.call(addressD096Bi4, addressDzdZaDH, uintc57FMKL, {from: "0x0000000000000000000000000000000000000001"});
		const uintwCLxZP1 = await OnXFinanceiTDkLy.allowance.call(addressdnlu3t1, addresszZ4GUpA, {from: accounts[2]});
		const boolyEqk4dI = await OnXFinanceiTDkLy.approve.call(addressy1zb6gg, uintGUqaQe, {from: accounts[1]});
		const uintJVFiU8 = await OnXFinanceiTDkLy.allowance.call(address7MLWiL, addressF6ps29X, {from: accounts[5]});
		const uint8E8uKdab = await OnXFinanceiTDkLy.decimals.call({from: accounts[0]});

		await expect(OnXFinanceiTDkLy.transferFrom.call(addressRyZvxDi, addressxjsxMNI, uintTiPk8ic, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXQESNt = "ocaUUeP2T6TgRv6Jzsa1EdeMkivcbnCX2H0xRTfzZ"
		const stringdXQHd7E = "KCFG"
		const uintnhA8FGe = BigInt("189")
		const OnXFinanceRhIt91R = await OnXFinance.new(stringXQESNt, stringdXQHd7E, uintnhA8FGe, {from: accounts[1]});
		const uinthAO3dsD = BigInt("1357")
		const addresssLyRJAw = accounts[4]
		const addressHEfPSKH = accounts[3]
		const uintyassGA1 = BigInt("1748")
		const addressy9WZGAD = "0x0000000000000000000000000000000000000001"
		const uintvB5EEg = BigInt("976")
		const addressfJ0eZMd = accounts[1]
		const addressY4iMTT8 = accounts[0]
		const uintTuClsM0 = BigInt("1397")
		const addressBnGTL8H = accounts[3]
		const boolrs4DPIN = await OnXFinanceRhIt91R.transferFrom.call(addressHEfPSKH, addresssLyRJAw, uinthAO3dsD, {from: accounts[3]});
		const uint8RRQSmUl = await OnXFinanceRhIt91R.decimals.call({from: accounts[4]});
		const booltGOMOQ4 = await OnXFinanceRhIt91R.approve.call(addressy9WZGAD, uintyassGA1, {from: accounts[2]});
		const boolf1Xt2sU = await OnXFinanceRhIt91R.transferFrom.call(addressY4iMTT8, addressfJ0eZMd, uintvB5EEg, {from: accounts[1]});
		const boolwtEJoua = await OnXFinanceRhIt91R.approveAndCall.call(addressBnGTL8H, uintTuClsM0, {from: accounts[3]});

		await expect(OnXFinanceRhIt91R.transferFrom.call(addressHEfPSKH, addresssLyRJAw, uinthAO3dsD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringEzzMI9s = "zdSnAbjRqUuVpQRb6QWEMFBVY8SmIABzzwOaknLt5wFpjGui9HFJEtAf3xtHmuVtHcxkyLBDgKaqLtJgiGWhTpO4jfN"
		const stringwwkplPq = "mFmkfiM2kOH46WuY6RP6Ei8UPzGL"
		const uintWmXVpZn = BigInt("1811")
		const OnXFinanceS0d1KD = await OnXFinance.new(stringEzzMI9s, stringwwkplPq, uintWmXVpZn, {from: accounts[4]});
		const uintm6oNnUa = BigInt("1576")
		const addressMmsfqWi = accounts[0]
		const uintaFNNfZV = BigInt("238")
		const addressh1bGq5s = accounts[4]
		const addressXk9PS0 = accounts[2]
		const addressp4AuAc1 = accounts[2]
		const uinttiU6LU3 = BigInt("1087")
		const addressMeidvYP = accounts[2]
		const uintrjhkfV = BigInt("154")
		const addressjxnuBUI = accounts[0]
		const addressQOT8HMm = accounts[3]
		const boolvrXKIYy = await OnXFinanceS0d1KD.transfer.call(addressMmsfqWi, uintm6oNnUa, {from: accounts[1]});
		const boolUpPjf4 = await OnXFinanceS0d1KD.increaseAllowance.call(addressh1bGq5s, uintaFNNfZV, {from: accounts[0]});
		const uintsOhMCIV = await OnXFinanceS0d1KD.allowance.call(addressp4AuAc1, addressXk9PS0, {from: accounts[0]});
		const boolXbxsX1J = await OnXFinanceS0d1KD.approve.call(addressMeidvYP, uinttiU6LU3, {from: accounts[4]});
		const boolqmjDu2 = await OnXFinanceS0d1KD.transferFrom.call(addressQOT8HMm, addressjxnuBUI, uintrjhkfV, {from: accounts[1]});

		await expect(OnXFinanceS0d1KD.transfer.call(addressMmsfqWi, uintm6oNnUa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringvlJwdq6 = "5m8Lga1eKMNTgfQP"
		const stringwXGr6Jk = "TjkfTEkpOGn8IjnePVzc6rLjHYIKr83s09rVmkLnoAaIPo0kXsieVFuuPAo5JRJT82NxzRD2"
		const uintxbOjVe1 = BigInt("198")
		const OnXFinancecnTC7Y4 = await OnXFinance.new(stringvlJwdq6, stringwXGr6Jk, uintxbOjVe1, {from: accounts[1]});
		const addresspD6iOCh = accounts[2]
		const addressmuQRblM = accounts[0]
		const addressFC5FAaL = accounts[0]
		const uintr0TBap8 = BigInt("174")
		const addressEDXpvK = accounts[1]
		const addressP8yvgwk = accounts[1]
		const uintRncKqtf = await OnXFinancecnTC7Y4.allowance.call(addressmuQRblM, addresspD6iOCh, {from: accounts[4]});
		const boolpTBZola = await OnXFinancecnTC7Y4.transferownership.call(addressFC5FAaL, {from: accounts[4]});
		const boolE7iYSV4 = await OnXFinancecnTC7Y4.transferFrom.call(addressP8yvgwk, addressEDXpvK, uintr0TBap8, {from: accounts[3]});

		assert.equal(uintRncKqtf, BigInt("0"))
		await expect(OnXFinancecnTC7Y4.transferownership.call(addressFC5FAaL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringYzGZ7fU = "XYyMiUuhkwBahNbqlhoeruwkodtd"
		const stringVK5reQ8 = "rvtxApyVz5Hwj1rXlxJWQi3hpzw2dw2flkS3hekRc73fFWmu8QsmmhRp7HGqHOesfjc8x0bN6eTDytq7l4alv"
		const uintoMVsJl = BigInt("190")
		const OnXFinancehRcczKZ = await OnXFinance.new(stringYzGZ7fU, stringVK5reQ8, uintoMVsJl, {from: accounts[4]});
		const uintPeOK9Zk = BigInt("1161")
		const addresspSbRppo = "0x0000000000000000000000000000000000000001"
		const uintZ6ksCyu = BigInt("99")
		const addressCXZztIo = accounts[1]
		const addressUTuxSX8 = accounts[5]
		const boolatHeCTE = await OnXFinancehRcczKZ.approveAndCall.call(addresspSbRppo, uintPeOK9Zk, {from: accounts[3]});
		const boolaFyytXb = await OnXFinancehRcczKZ.transferFrom.call(addressUTuxSX8, addressCXZztIo, uintZ6ksCyu, {from: accounts[1]});
		const stringi8iIwhc = await OnXFinancehRcczKZ.symbol.call({from: accounts[4]});

		await expect(OnXFinancehRcczKZ.approveAndCall.call(addresspSbRppo, uintPeOK9Zk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringy9ZWtWd = "CRjXegZcQvX4yc9XyYBmgJ0S52HuKmsH4Vh9gsHvUnPmnqTDnG"
		const stringiZJhLN7 = "LJEkFakPNCXVs6FMUdoGl24FktkjPjXWX4svi2AX76GmMD6whDVbDnuQJ"
		const uintrrlabK8 = BigInt("505")
		const OnXFinanceHNezefu = await OnXFinance.new(stringy9ZWtWd, stringiZJhLN7, uintrrlabK8, {from: accounts[3]});
		const uintRYLcjZU = BigInt("1490")
		const addressx7KRsxK = accounts[3]
		const uintUhBSsa = BigInt("150")
		const addressq0276GE = accounts[0]
		const addressHZXStZM = accounts[4]
		const uintcTEl4Ou = BigInt("1649")
		const addressH1UJRw5 = accounts[2]
		const uintqmoiXyJ = BigInt("1382")
		const addressjGyv4Vw = "0x0000000000000000000000000000000000000001"
		const boolpUE3vr = await OnXFinanceHNezefu.transfer.call(addressx7KRsxK, uintRYLcjZU, {from: accounts[4]});
		const boolMM2euUY = await OnXFinanceHNezefu.transferFrom.call(addressHZXStZM, addressq0276GE, uintUhBSsa, {from: "0x0000000000000000000000000000000000000001"});
		const boolgqkadTf = await OnXFinanceHNezefu.transfer.call(addressH1UJRw5, uintcTEl4Ou, {from: accounts[1]});
		const boolXZQd1YJ = await OnXFinanceHNezefu.decreaseAllowance.call(addressjGyv4Vw, uintqmoiXyJ, {from: accounts[1]});
		const stringz8z9YPD = await OnXFinanceHNezefu.symbol.call({from: accounts[1]});

		await expect(OnXFinanceHNezefu.transfer.call(addressx7KRsxK, uintRYLcjZU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringWuT1ya9 = "ndjMQhc1DBrK98GGsBLeFp65Bmp0J8l25RgceG0HARzOAplCxcG3rcVTVW4g1eh"
		const string9O1kQ5 = "hkRngvJkxNySdIh3rqwolJkEi8sRukYEnFqYHwH8TCjzgiQt8dC5WftUKPorTb9MkuJm38lS5SfGT4PD2Npx"
		const uintzDDR4t = BigInt("94")
		const OnXFinanceLYStw2S = await OnXFinance.new(stringWuT1ya9, string9O1kQ5, uintzDDR4t, {from: accounts[1]});
		const uintVW1vdyf = BigInt("1019")
		const addressur56cu1 = accounts[1]
		const uintXAvgVDh = BigInt("1683")
		const addresszp8F7D = accounts[3]
		const addressRu2BbP9 = accounts[2]
		const uintDytFKVS = BigInt("1851")
		const addressP9dlM7B = accounts[4]
		const addressODa60o = accounts[0]
		const boolnJHZUAT = await OnXFinanceLYStw2S.approve.call(addressur56cu1, uintVW1vdyf, {from: accounts[2]});
		const uint8Zz58iZu = await OnXFinanceLYStw2S.decimals.call({from: accounts[5]});
		const stringkDbs1rb = await OnXFinanceLYStw2S.name.call({from: accounts[0]});
		const boolpOschYp = await OnXFinanceLYStw2S.transferFrom.call(addressRu2BbP9, addresszp8F7D, uintXAvgVDh, {from: "0x0000000000000000000000000000000000000001"});
		const boolib0Vwu = await OnXFinanceLYStw2S.transferFrom.call(addressODa60o, addressP9dlM7B, uintDytFKVS, {from: accounts[1]});

		assert.equal(boolnJHZUAT, true)
		assert.equal(stringkDbs1rb, "ndjMQhc1DBrK98GGsBLeFp65Bmp0J8l25RgceG0HARzOAplCxcG3rcVTVW4g1eh")
		assert.equal(uint8Zz58iZu, BigInt("18"))
		await expect(OnXFinanceLYStw2S.transferFrom.call(addressRu2BbP9, addresszp8F7D, uintXAvgVDh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringDHgOJ6Y = "jd99zRyEuKU2Me41gqLE6wHr7xybNOdPgPo9QO"
		const stringYs2ITr4 = "zYaTAtSxpPHvYq7pQEXcT3k7m5mmv62ERmUw8CtUvx6ADxyhUN"
		const uintUklhZj0 = BigInt("39")
		const OnXFinanceIq51hM9 = await OnXFinance.new(stringDHgOJ6Y, stringYs2ITr4, uintUklhZj0, {from: "0x0000000000000000000000000000000000000001"});
		const uintfoqPu5q = BigInt("1285")
		const addressSzaok0q = accounts[1]
		const boolXQXKefV = await OnXFinanceIq51hM9.decreaseAllowance.call(addressSzaok0q, uintfoqPu5q, {from: accounts[0]});
		const uintgoK0GXc = await OnXFinanceIq51hM9.totalSupply.call({from: accounts[2]});
	});

	it('test for OnXFinance', async () => {
		const stringTm6rl8q = "JJkziFM6GFqLQWC"
		const stringv6M2GTr = "jYhy3wzr1q9MrFdT"
		const uintVkt2kP = BigInt("1398")
		const OnXFinancel4Lm434 = await OnXFinance.new(stringTm6rl8q, stringv6M2GTr, uintVkt2kP, {from: accounts[2]});
		const uintgiiA9ti = BigInt("0")
		const addressS53gvv4 = accounts[5]
		const addresspYYdhhs = accounts[0]
		const uintmuYqxVH = BigInt("1002")
		const addresskqmA4I = accounts[3]
		const addressNBdNMEh = accounts[2]
		const addressBNYOHE = accounts[3]
		const boolp6e2BXI = await OnXFinancel4Lm434.transferFrom.call(addresspYYdhhs, addressS53gvv4, uintgiiA9ti, {from: "0x0000000000000000000000000000000000000001"});
		const boolafEXxmL = await OnXFinancel4Lm434.approve.call(addresskqmA4I, uintmuYqxVH, {from: accounts[1]});
		const uintiNnUp6g = await OnXFinancel4Lm434.allowance.call(addressBNYOHE, addressNBdNMEh, {from: accounts[0]});

		assert.equal(boolafEXxmL, true)
		assert.equal(boolp6e2BXI, true)
		assert.equal(uintiNnUp6g, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringYzGZ7fU = "XYyMiUuhkwBahNbqlhoeruwkodtd"
		const stringVK5reQ8 = "rvtxApyVz5Hwj1rXlxJWQi3hpzw2dw2flkS3hekRc73fFWmu8QsmmhRp7HGqHOesfjc8x0bN6eTDytq7l4alv"
		const uintS2xDOWo = BigInt("190")
		const OnXFinancehRcczKZ = await OnXFinance.new(stringYzGZ7fU, stringVK5reQ8, uintS2xDOWo, {from: accounts[4]});
		const uintmuISdoE = BigInt("1998")
		const addressfQrgzvP = accounts[0]
		const uintDwNK0NM = BigInt("1161")
		const addressamPFT9B = "0x0000000000000000000000000000000000000001"
		const addressZA4yjNj = accounts[4]
		const addressSFCAUB = accounts[5]
		const uintaDJh7R = BigInt("1480")
		const addressq3pCauc = accounts[4]
		const boolQWeyRaA = await OnXFinancehRcczKZ.approveAndCall.call(addressfQrgzvP, uintmuISdoE, {from: accounts[4]});
		const boolatHeCTE = await OnXFinancehRcczKZ.approveAndCall.call(addressamPFT9B, uintDwNK0NM, {from: accounts[3]});
		const uintEaM0aIy = await OnXFinancehRcczKZ.allowance.call(addressSFCAUB, addressZA4yjNj, {from: accounts[0]});
		const boolzy8QB3C = await OnXFinancehRcczKZ.approve.call(addressq3pCauc, uintaDJh7R, {from: accounts[1]});

		assert.equal(boolQWeyRaA, true)
		await expect(OnXFinancehRcczKZ.approveAndCall.call(addressamPFT9B, uintDwNK0NM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})