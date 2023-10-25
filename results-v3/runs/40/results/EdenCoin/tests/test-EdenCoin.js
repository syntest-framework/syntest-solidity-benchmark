const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinPbIAn4 = await EdenCoin.new({from: accounts[4]});
		const uintkeFblMC = BigInt("1780")
		const addressiSAUCxX = accounts[1]
		const uintOaMPK1p = BigInt("988")
		const addressH0ejW37 = accounts[1]
		const uintSKJ6d3w = BigInt("318")
		const addresspvot7iU = accounts[4]
		const uintES3slPX = BigInt("992")
		const addresske9NRtM = accounts[1]
		const addresszO176cp = accounts[1]
		const booleyfkUtt = await EdenCoinPbIAn4.transfer.call(addressiSAUCxX, uintkeFblMC, {from: accounts[0]});
		const boolqwKdS3e = await EdenCoinPbIAn4.transfer.call(addressH0ejW37, uintOaMPK1p, {from: accounts[4]});
		const boolG7LB0eS = await EdenCoinPbIAn4.increaseApproval.call(addresspvot7iU, uintSKJ6d3w, {from: accounts[0]});
		const boolFEWv59Q = await EdenCoinPbIAn4.transferFrom.call(addresszO176cp, addresske9NRtM, uintES3slPX, {from: accounts[0]});

		await expect(EdenCoinPbIAn4.transfer.call(addressiSAUCxX, uintkeFblMC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoineNABGk = await EdenCoin.new({from: accounts[3]});
		const uintSIjlQbw = BigInt("262")
		const addressbiQasNS = accounts[3]
		const addressjYi5x6 = accounts[3]
		const uinth6EcSKo = BigInt("1822")
		const addresssFeS7SZ = accounts[4]
		const uintJmDeWLa = BigInt("925")
		const addressCkcHiPU = accounts[5]
		const addressAoLZnbG = "0x0000000000000000000000000000000000000001"
		const uintxDsCsEB = BigInt("848")
		const addressCJc9jj7 = accounts[1]
		const booliluwrZt = await EdenCoineNABGk.approve.call(addressbiQasNS, uintSIjlQbw, {from: accounts[4]});
		const uint256NPc6gxi = await EdenCoineNABGk.balanceOf.call(addressjYi5x6, {from: accounts[4]});
		const boolZt1hglV = await EdenCoineNABGk.approve.call(addresssFeS7SZ, uinth6EcSKo, {from: accounts[4]});
		const boolIEixqp = await EdenCoineNABGk.transferFrom.call(addressAoLZnbG, addressCkcHiPU, uintJmDeWLa, {from: accounts[0]});
		const boolcEbyQM9 = await EdenCoineNABGk.increaseApproval.call(addressCJc9jj7, uintxDsCsEB, {from: accounts[4]});

		assert.equal(boolZt1hglV, true)
		assert.equal(booliluwrZt, true)
		assert.equal(uint256NPc6gxi, BigInt("1000000000000000000000000000"))
		await expect(EdenCoineNABGk.transferFrom.call(addressAoLZnbG, addressCkcHiPU, uintJmDeWLa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinBbIe8h7 = await EdenCoin.new({from: accounts[0]});
		const uint6eaLy5 = BigInt("819")
		const addressPz8XtFq = accounts[4]
		const uintatrtH7i = BigInt("1713")
		const addresstTSO28z = accounts[2]
		const addressQGyTRPW = accounts[0]
		const addressJpijbk = accounts[4]
		const boolnBMQ8cN = await EdenCoinBbIe8h7.transfer.call(addressPz8XtFq, uint6eaLy5, {from: accounts[0]});
		const boolcaYcJrK = await EdenCoinBbIe8h7.transfer.call(addresstTSO28z, uintatrtH7i, {from: "0x0000000000000000000000000000000000000001"});
		const uint256z2sqapL = await EdenCoinBbIe8h7.allowance.call(addressJpijbk, addressQGyTRPW, {from: accounts[0]});

		assert.equal(boolnBMQ8cN, true)
		await expect(EdenCoinBbIe8h7.transfer.call(addresstTSO28z, uintatrtH7i, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinrjPs7gL = await EdenCoin.new({from: accounts[5]});
		const uintI3cx0yR = BigInt("360")
		const addressvibPRaE = accounts[2]
		const uintAiXfaqo = BigInt("354")
		const addressdLAOjZi = accounts[3]
		const addressPqswpjR = accounts[4]
		const uintJzuOuru = BigInt("746")
		const addressnJbei3 = accounts[1]
		const uinti8VZCkF = BigInt("325")
		const addressZuDnh6 = "0x0000000000000000000000000000000000000001"
		const boolfLYa3gV = await EdenCoinrjPs7gL.increaseApproval.call(addressvibPRaE, uintI3cx0yR, {from: accounts[5]});
		const boolMjJd0R3 = await EdenCoinrjPs7gL.transferFrom.call(addressPqswpjR, addressdLAOjZi, uintAiXfaqo, {from: accounts[3]});
		const boolyuKa7Pm = await EdenCoinrjPs7gL.transfer.call(addressnJbei3, uintJzuOuru, {from: accounts[5]});
		const boolrUzTTAC = await EdenCoinrjPs7gL.transfer.call(addressZuDnh6, uinti8VZCkF, {from: accounts[5]});

		assert.equal(boolfLYa3gV, true)
		await expect(EdenCoinrjPs7gL.transferFrom.call(addressPqswpjR, addressdLAOjZi, uintAiXfaqo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinmFRedXz = await EdenCoin.new({from: accounts[2]});
		const uintj8TOOex = BigInt("1038")
		const addressK3EtUs8 = accounts[5]
		const uintFabQVJO = BigInt("508")
		const addressEMJOtnN = accounts[0]
		const addressffQF0SW = accounts[3]
		const address0zDByL = accounts[4]
		const addressiPyk4Cv = accounts[3]
		const addressXcTgB52 = accounts[1]
		const addressQ1vcCcP = accounts[2]
		const boolkZZEIr = await EdenCoinmFRedXz.increaseApproval.call(addressK3EtUs8, uintj8TOOex, {from: accounts[4]});
		const boolfbX9t5 = await EdenCoinmFRedXz.increaseApproval.call(addressEMJOtnN, uintFabQVJO, {from: accounts[2]});
		const uint256u9U3CuK = await EdenCoinmFRedXz.allowance.call(address0zDByL, addressffQF0SW, {from: accounts[0]});
		const uint256lXhmR18 = await EdenCoinmFRedXz.allowance.call(addressXcTgB52, addressiPyk4Cv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uW3OIrF = await EdenCoinmFRedXz.balanceOf.call(addressQ1vcCcP, {from: accounts[1]});

		assert.equal(boolfbX9t5, true)
		assert.equal(boolkZZEIr, true)
		assert.equal(uint256lXhmR18, BigInt("0"))
		assert.equal(uint256u9U3CuK, BigInt("0"))
		assert.equal(uint256uW3OIrF, BigInt("1000000000000000000000000000"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinrjPs7gL = await EdenCoin.new({from: accounts[5]});
		const uinth80URYU = BigInt("360")
		const addressYGAixam = accounts[2]
		const uintHjy5UA3 = BigInt("354")
		const addressunm3EsL = accounts[3]
		const addressem7A3bw = accounts[5]
		const uintppkkUrj = BigInt("746")
		const addressy6yB08U = accounts[1]
		const uintvy7Tygu = BigInt("325")
		const addressxgZYNXq = "0x0000000000000000000000000000000000000001"
		const boolfLYa3gV = await EdenCoinrjPs7gL.increaseApproval.call(addressYGAixam, uinth80URYU, {from: accounts[5]});
		const boolMjJd0R3 = await EdenCoinrjPs7gL.transferFrom.call(addressem7A3bw, addressunm3EsL, uintHjy5UA3, {from: accounts[3]});
		const boolyuKa7Pm = await EdenCoinrjPs7gL.transfer.call(addressy6yB08U, uintppkkUrj, {from: accounts[5]});
		const boolrUzTTAC = await EdenCoinrjPs7gL.transfer.call(addressxgZYNXq, uintvy7Tygu, {from: accounts[5]});

		assert.equal(boolfLYa3gV, true)
		await expect(EdenCoinrjPs7gL.transferFrom.call(addressem7A3bw, addressunm3EsL, uintHjy5UA3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoineNABGk = await EdenCoin.new({from: accounts[3]});
		const uintRmtMOIv = BigInt("262")
		const addressYLSU7T0 = accounts[3]
		const uintJ5cA2zx = BigInt("345")
		const addressJqte2LP = accounts[3]
		const addressfUw9h5I = accounts[4]
		const uintaqS9gk3 = BigInt("1822")
		const address30eYlo = accounts[4]
		const uintIBkSErz = BigInt("63")
		const addressQwRBAlp = accounts[5]
		const addressdlf0BMy = accounts[4]
		const uintRsxClNa = BigInt("943")
		const addressfVYN2G4 = accounts[5]
		const addresso22BsW7 = "0x0000000000000000000000000000000000000001"
		const uintaOw7Eum = BigInt("890")
		const addressIjaV2h1 = accounts[5]
		const uintOOmAUwj = BigInt("848")
		const addressZL1VSiZ = accounts[1]
		const booliluwrZt = await EdenCoineNABGk.approve.call(addressYLSU7T0, uintRmtMOIv, {from: accounts[4]});
		const boolflnTwXv = await EdenCoineNABGk.decreaseApproval.call(addressJqte2LP, uintJ5cA2zx, {from: accounts[0]});
		const uint256NPc6gxi = await EdenCoineNABGk.balanceOf.call(addressfUw9h5I, {from: accounts[4]});
		const boolZt1hglV = await EdenCoineNABGk.approve.call(address30eYlo, uintaqS9gk3, {from: accounts[4]});
		const bool7TDEmV = await EdenCoineNABGk.approve.call(addressQwRBAlp, uintIBkSErz, {from: accounts[3]});
		const uint256qfSjs3b = await EdenCoineNABGk.balanceOf.call(addressdlf0BMy, {from: accounts[2]});
		const boolIEixqp = await EdenCoineNABGk.transferFrom.call(addresso22BsW7, addressfVYN2G4, uintRsxClNa, {from: accounts[0]});
		const boolAu8372x = await EdenCoineNABGk.approve.call(addressIjaV2h1, uintaOw7Eum, {from: accounts[0]});
		const boolcEbyQM9 = await EdenCoineNABGk.increaseApproval.call(addressZL1VSiZ, uintOOmAUwj, {from: accounts[4]});

		assert.equal(bool7TDEmV, true)
		assert.equal(boolZt1hglV, true)
		assert.equal(boolflnTwXv, true)
		assert.equal(booliluwrZt, true)
		assert.equal(uint256NPc6gxi, BigInt("0"))
		assert.equal(uint256qfSjs3b, BigInt("0"))
		await expect(EdenCoineNABGk.transferFrom.call(addresso22BsW7, addressfVYN2G4, uintRsxClNa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinT7EyGWj = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressIRpXLk = accounts[0]
		const addressAQ0j4im = accounts[5]
		const addressWZ932t9 = accounts[4]
		const uintd3HWsEk = BigInt("772")
		const addressPLgGy9Y = accounts[2]
		const addresssXkCIEu = accounts[1]
		const addressWf3Muvc = accounts[1]
		const uint256dZmLm0x = await EdenCoinT7EyGWj.balanceOf.call(addressIRpXLk, {from: accounts[0]});
		const uint256rmPM2eX = await EdenCoinT7EyGWj.allowance.call(addressWZ932t9, addressAQ0j4im, {from: accounts[3]});
		const booloUgzrEw = await EdenCoinT7EyGWj.approve.call(addressPLgGy9Y, uintd3HWsEk, {from: accounts[5]});
		const uint256L8gsQzh = await EdenCoinT7EyGWj.allowance.call(addressWf3Muvc, addresssXkCIEu, {from: accounts[0]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinKfArbhy = await EdenCoin.new({from: accounts[4]});
		const uintkVSpPMd = BigInt("0")
		const addressjWIMShx = accounts[3]
		const uintwwAELax = BigInt("801")
		const addressuYKvyJj = accounts[1]
		const addressGKhVdS = accounts[4]
		const uintoRlcnnv = BigInt("1610")
		const addressgidx5ZT = accounts[6]
		const uintCIQwXib = BigInt("979")
		const addressiISOgQV = accounts[2]
		const addressJLF9nw = accounts[1]
		const uintKSP9OH6 = BigInt("353")
		const addresscd9SDps = accounts[3]
		const boolmj3OEwu = await EdenCoinKfArbhy.decreaseApproval.call(addressjWIMShx, uintkVSpPMd, {from: "0x0000000000000000000000000000000000000001"});
		const boolDMvu7qH = await EdenCoinKfArbhy.transferFrom.call(addressGKhVdS, addressuYKvyJj, uintwwAELax, {from: accounts[5]});
		const boolOBMX4gC = await EdenCoinKfArbhy.increaseApproval.call(addressgidx5ZT, uintoRlcnnv, {from: accounts[4]});
		const boolCZ73Z49 = await EdenCoinKfArbhy.transferFrom.call(addressJLF9nw, addressiISOgQV, uintCIQwXib, {from: accounts[2]});
		const boolfdYQ1kY = await EdenCoinKfArbhy.approve.call(addresscd9SDps, uintKSP9OH6, {from: accounts[3]});

		assert.equal(boolmj3OEwu, true)
		await expect(EdenCoinKfArbhy.transferFrom.call(addressGKhVdS, addressuYKvyJj, uintwwAELax, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})