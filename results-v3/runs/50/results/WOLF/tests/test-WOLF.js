const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringA94lxXV = "54Oss8S8b7GtQXeDuzdjuBJH8kVESF0rFbQtrFQOl3rBEzK8cTiuigTGieTNplgU"
		const stringAztqei = "tNU1Qo3XkbLMU8n63KSBVkf2zYlwt2Y8l7cmWuWuPQBPzXAsQX48gWJWspBXrP9F1jOv581iZeQlGSsEfjt"
		const uintFrWe6hc = BigInt("143")
		const WOLFiOh6lBt = await WOLF.new(stringA94lxXV, stringAztqei, uintFrWe6hc, {from: accounts[1]});
		const uintZreYNNz = BigInt("1073")
		const addressmBeuFgJ = accounts[3]
		const uintT57mcT = BigInt("1896")
		const addressUC2t0f = accounts[1]
		const boolsz0ftlI = await WOLFiOh6lBt.transfer.call(addressmBeuFgJ, uintZreYNNz, {from: accounts[2]});
		const boolpYoavMK = await WOLFiOh6lBt.approveAndCall.call(addressUC2t0f, uintT57mcT, {from: accounts[1]});

		await expect(WOLFiOh6lBt.transfer.call(addressmBeuFgJ, uintZreYNNz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringUEzWYHm = "4o39H2QI39fCym2mYCwS0ONKugthIVfraAzyf"
		const stringdfuHPML = "O2P47cPfkW5GwNJ2Z6FTKM5lVqnIPnNFTHOkwgAkuOgIktVi9mmiqHgeFOVATr1nVixrgtHH8ahxXYN19t"
		const uintspILc8h = BigInt("953")
		const WOLFij3Fq7 = await WOLF.new(stringUEzWYHm, stringdfuHPML, uintspILc8h, {from: accounts[3]});
		const uintYhSBLBg = BigInt("621")
		const addressg9Zsejl = accounts[4]
		const addressSFueohV = accounts[3]
		const uintSG98zaT = BigInt("1176")
		const addressw2twrl3 = accounts[0]
		const uintln1mE5v = BigInt("1423")
		const addressOn8oinh = "0x0000000000000000000000000000000000000001"
		const addressun3s0JI = "0x0000000000000000000000000000000000000001"
		const boolfesJBqT = await WOLFij3Fq7.transferFrom.call(addressSFueohV, addressg9Zsejl, uintYhSBLBg, {from: accounts[3]});
		const boolvUqsrhB = await WOLFij3Fq7.approve.call(addressw2twrl3, uintSG98zaT, {from: accounts[3]});
		const boolSfuOYMW = await WOLFij3Fq7.transferFrom.call(addressun3s0JI, addressOn8oinh, uintln1mE5v, {from: accounts[4]});

		assert.equal(boolfesJBqT, true)
		assert.equal(boolvUqsrhB, true)
		await expect(WOLFij3Fq7.transferFrom.call(addressun3s0JI, addressOn8oinh, uintln1mE5v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const string3COoXC = "OQTtDaRKRSrndFiQGPs3lWCuI7WtjmqGK2kgqAMVELXtrcp"
		const stringPgXwcpG = "Pfe5ZGWpFCmWGxOOvuyIbPJ7z2kBgKlu1TXHJbvLAtfFMXVdzqu3L36OAF15Xhac4QvuKsMVESN9UntG6A"
		const uintj0DUqiz = BigInt("437")
		const WOLFaJWO65s = await WOLF.new(string3COoXC, stringPgXwcpG, uintj0DUqiz, {from: accounts[1]});
		const uintZgb2wcr = BigInt("369")
		const address52r8yi = accounts[3]
		const uintJ2nfv4F = BigInt("1243")
		const addressntZHjjt = accounts[0]
		const uintZOXPza = BigInt("851")
		const addresspi3ACbD = accounts[5]
		const uintt7G6dw = BigInt("1075")
		const addressvyI0wQv = accounts[0]
		const boolUXwxsjO = await WOLFaJWO65s.approveAndCall.call(address52r8yi, uintZgb2wcr, {from: accounts[1]});
		const boolVxxWnf8 = await WOLFaJWO65s.approve.call(addressntZHjjt, uintJ2nfv4F, {from: accounts[1]});
		const boolrRCGTWs = await WOLFaJWO65s.approve.call(addresspi3ACbD, uintZOXPza, {from: accounts[1]});
		const boolmNR2L1a = await WOLFaJWO65s.approve.call(addressvyI0wQv, uintt7G6dw, {from: accounts[3]});

		assert.equal(boolUXwxsjO, true)
		assert.equal(boolVxxWnf8, true)
		assert.equal(boolmNR2L1a, true)
		assert.equal(boolrRCGTWs, true)
	});

	it('test for WOLF', async () => {
		const stringFILFYmC = "ePxJBdcclolB81TaodFJzbexI"
		const stringUrjo4N = "PDWOt9qTHR6pU8aNqOhPSc5lqtqFsxWOuHX5lPH78NvW4BVdvk3pvXa3v0M9uOPSwZGtkzKJTQEajs"
		const uints9VDZPy = BigInt("1007")
		const WOLFNOIono6 = await WOLF.new(stringFILFYmC, stringUrjo4N, uints9VDZPy, {from: accounts[2]});
		const addressjvYpz8a = accounts[0]
		const uintrzsmZiP = BigInt("1771")
		const addressDmoZIiS = accounts[4]
		const boolZEC0s0 = await WOLFNOIono6.transferownership.call(addressjvYpz8a, {from: accounts[4]});
		const boolMrAIx7T = await WOLFNOIono6.transfer.call(addressDmoZIiS, uintrzsmZiP, {from: accounts[1]});

		await expect(WOLFNOIono6.transferownership.call(addressjvYpz8a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringaUjtytS = "n12vFfzatc4SRkKwXpSDZGqdsJDH6qeK15l8Nzaht73JjRhu0i4m6iDqX"
		const string7VjDe7 = "Aq29Z0T4raKguPSxlLyXdULlPs2nHUmuQV4dJiG5"
		const uintooRW32z = BigInt("28")
		const WOLFKNJupg0 = await WOLF.new(stringaUjtytS, string7VjDe7, uintooRW32z, {from: "0x0000000000000000000000000000000000000001"});
		const uintNLwfUlH = BigInt("1367")
		const addresswTKug8V = accounts[3]
		const uintmejjWrq = BigInt("1197")
		const addressrpl3igQ = accounts[4]
		const boolNoMZcK = await WOLFKNJupg0.approve.call(addresswTKug8V, uintNLwfUlH, {from: accounts[3]});
		const boolCBiNL8J = await WOLFKNJupg0.approve.call(addressrpl3igQ, uintmejjWrq, {from: accounts[5]});
	});

	it('test for WOLF', async () => {
		const stringMrZOeWF = "iDtZL6X2"
		const stringQtbMRLV = "do7pffeh4me6HRJsfr25uHC4aC65Fdlq83aCLr2VHzoAbhYeQuuXIzZyiw9q4pDdcwM6nT5L1KjJ3wyrdkmO7PcHne"
		const uintfp7O28d = BigInt("1090")
		const WOLFdZvmnl = await WOLF.new(stringMrZOeWF, stringQtbMRLV, uintfp7O28d, {from: accounts[2]});
		const uintAuKGW8S = BigInt("0")
		const addressV5752cf = accounts[5]
		const uintRJd7VK = BigInt("1316")
		const addressrzzXiSR = accounts[0]
		const uintbMPPSKB = BigInt("1073")
		const addressFym8RVn = accounts[3]
		const uintEla6qYX = BigInt("58")
		const addresshfPPebD = accounts[2]
		const boolLFVkimr = await WOLFdZvmnl.approveAndCall.call(addressV5752cf, uintAuKGW8S, {from: accounts[2]});
		const boolRAZuFHp = await WOLFdZvmnl.approveAndCall.call(addressrzzXiSR, uintRJd7VK, {from: accounts[4]});
		const boolgiht3pl = await WOLFdZvmnl.approveAndCall.call(addressFym8RVn, uintbMPPSKB, {from: accounts[0]});
		const booltr0Y69s = await WOLFdZvmnl.approveAndCall.call(addresshfPPebD, uintEla6qYX, {from: accounts[1]});

		assert.equal(boolLFVkimr, true)
		await expect(WOLFdZvmnl.approveAndCall.call(addressrzzXiSR, uintRJd7VK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringVMcv7D3 = "DF2pvn2HxOH9YbReD2FLNEggfthEkTvGI3IJR7JvPcpxPjsSX0veEQp7eF4WY14RHSsrqrOpew3hJaw5"
		const stringH5mVSjr = "h"
		const uintc3AS6si = BigInt("920")
		const WOLFsweVmoY = await WOLF.new(stringVMcv7D3, stringH5mVSjr, uintc3AS6si, {from: accounts[1]});
		const uintIIWeDB = BigInt("0")
		const addressVGXr80W = accounts[4]
		const bool6ncdLJ = await WOLFsweVmoY.transfer.call(addressVGXr80W, uintIIWeDB, {from: accounts[3]});

		assert.equal(bool6ncdLJ, true)
	});
})