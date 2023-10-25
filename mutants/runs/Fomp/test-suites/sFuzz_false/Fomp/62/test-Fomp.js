const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressP6wnOKv = accounts[1]
		const FomptgTbozy = await Fomp.new(addressP6wnOKv, {from: accounts[3]});
		const byteaqWLwOb = "0x181713020220130e1d0811001e001d0f1907081506190a181a020d12051d0115"
		const byteU0uUX4q = "0x02190404140c0213100b07140f0b1c0a0a141e151e0805161b0c1c0f0a001a13"
		const uintl4X5y4V = BigInt("60")
		const uintd5IWBEa = BigInt("1128")
		const uintM8q61Gi = BigInt("1873")
		const addressDo62oqX = accounts[1]
		const addressZu9zlb = accounts[2]
		const uintDDPwhQP = BigInt("797")
		const addresst2lq5hi = accounts[0]
		const addresscLMedMl = accounts[0]
		const addressW4polYO = await FomptgTbozy.delegateBySig.call(addressDo62oqX, uintM8q61Gi, uintd5IWBEa, uintl4X5y4V, byteU0uUX4q, byteaqWLwOb, {from: accounts[4]});
		const uint96Sx4sBMB = await FomptgTbozy.getCurrentVotes.call(addressZu9zlb, {from: accounts[0]});
		const boolWU1kLVN = await FomptgTbozy.approve.call(addresst2lq5hi, uintDDPwhQP, {from: accounts[0]});
		const addressPfTdVLD = await FomptgTbozy.delegate.call(addresscLMedMl, {from: accounts[3]});

		await expect(FomptgTbozy.delegateBySig.call(addressDo62oqX, uintM8q61Gi, uintd5IWBEa, uintl4X5y4V, byteU0uUX4q, byteaqWLwOb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressohZmMx = accounts[5]
		const FompNmCvvr8 = await Fomp.new(addressohZmMx, {from: accounts[0]});
		const addressouJNN4 = "0x0000000000000000000000000000000000000001"
		const uintP97dkOA = BigInt("933")
		const addressQH5AgK6 = "0x0000000000000000000000000000000000000001"
		const addressDm2ESW = accounts[1]
		const addressqkz1ERa = accounts[2]
		const uint96NatYNlE = await FompNmCvvr8.getCurrentVotes.call(addressouJNN4, {from: accounts[4]});
		const boolEV3zx7J = await FompNmCvvr8.transfer.call(addressQH5AgK6, uintP97dkOA, {from: accounts[1]});
		const uintuKHfL4j = await FompNmCvvr8.allowance.call(addressqkz1ERa, addressDm2ESW, {from: accounts[2]});

		assert.equal(uint96NatYNlE, BigInt("0"))
		await expect(FompNmCvvr8.transfer.call(addressQH5AgK6, uintP97dkOA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressNyvQs2o = accounts[3]
		const Fompb3cGku8 = await Fomp.new(addressNyvQs2o, {from: accounts[2]});
		const addressxlZZwr = accounts[1]
		const addresstbX3F0r = accounts[4]
		const addressvcplhZZ = accounts[1]
		const addressNyXtZQU = accounts[4]
		const addressxpfahvT = accounts[0]
		const uintuvoJ5L = BigInt("1283")
		const addressR0fIR0a = accounts[4]
		const addresskwAkpie = accounts[4]
		const addressojCMbVs = await Fompb3cGku8.delegate.call(addressxlZZwr, {from: "0x0000000000000000000000000000000000000001"});
		const uintWxy6NC = await Fompb3cGku8.allowance.call(addressvcplhZZ, addresstbX3F0r, {from: accounts[4]});
		const addressoSr94QW = await Fompb3cGku8.delegate.call(addressNyXtZQU, {from: accounts[0]});
		const uintJKNP1iE = await Fompb3cGku8.balanceOf.call(addressxpfahvT, {from: accounts[2]});
		const boolD64nbY = await Fompb3cGku8.transferFrom.call(addresskwAkpie, addressR0fIR0a, uintuvoJ5L, {from: accounts[4]});

		assert.equal(uintJKNP1iE, BigInt("0"))
		assert.equal(uintWxy6NC, BigInt("0"))
		await expect(Fompb3cGku8.transferFrom.call(addresskwAkpie, addressR0fIR0a, uintuvoJ5L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresslmNDx6V = accounts[5]
		const Fompkp8h5Xi = await Fomp.new(addresslmNDx6V, {from: accounts[3]});
		const uintTdNeDGG = BigInt("1117")
		const addressQSXPGvP = accounts[5]
		const uintoh4CmK = BigInt("870")
		const addressUlxajCc = accounts[5]
		const uint96zhWAglM = await Fompkp8h5Xi.getPriorVotes.call(addressQSXPGvP, uintTdNeDGG, {from: accounts[5]});
		const boolf6nCzH1 = await Fompkp8h5Xi.approve.call(addressUlxajCc, uintoh4CmK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolf6nCzH1, true)
		assert.equal(uint96zhWAglM, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressyBcO9fP = accounts[0]
		const FompoAWTdf0 = await Fomp.new(addressyBcO9fP, {from: accounts[5]});
		const uintFtipapg = BigInt("456")
		const addressKo3R5PG = accounts[2]
		const uintl6G17zg = BigInt("1164")
		const addressegc9Xqf = accounts[0]
		const addresschZREbX = "0x0000000000000000000000000000000000000001"
		const boolKUyy26 = await FompoAWTdf0.approve.call(addressKo3R5PG, uintFtipapg, {from: accounts[1]});
		const boolnntUxCM = await FompoAWTdf0.approve.call(addressegc9Xqf, uintl6G17zg, {from: "0x0000000000000000000000000000000000000001"});
		const uinthUL2B5U = await FompoAWTdf0.balanceOf.call(addresschZREbX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKUyy26, true)
		assert.equal(boolnntUxCM, true)
		assert.equal(uinthUL2B5U, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressxJvaMu = accounts[3]
		const Fompb3cGku8 = await Fomp.new(addressxJvaMu, {from: accounts[2]});
		const addressic83CYG = accounts[1]
		const addressufHkrsY = accounts[4]
		const addresswbYx7i = accounts[2]
		const addresskTWcCmg = accounts[4]
		const uintZgg9HUh = BigInt("781")
		const addressUDhfU8x = accounts[1]
		const uintSO1lV6V = BigInt("2029")
		const addressuJzZWiq = accounts[0]
		const addressEu4UV2x = accounts[0]
		const uinttUVb01q = BigInt("1283")
		const addressQuRkzU = accounts[4]
		const addressnqSe5fN = accounts[4]
		const addressojCMbVs = await Fompb3cGku8.delegate.call(addressic83CYG, {from: "0x0000000000000000000000000000000000000001"});
		const uintWxy6NC = await Fompb3cGku8.allowance.call(addresswbYx7i, addressufHkrsY, {from: accounts[4]});
		const addressoSr94QW = await Fompb3cGku8.delegate.call(addresskTWcCmg, {from: accounts[0]});
		const boolyiqwv0y = await Fompb3cGku8.transfer.call(addressUDhfU8x, uintZgg9HUh, {from: accounts[3]});
		const boolUnIPM70 = await Fompb3cGku8.approve.call(addressuJzZWiq, uintSO1lV6V, {from: accounts[0]});
		const uintJKNP1iE = await Fompb3cGku8.balanceOf.call(addressEu4UV2x, {from: accounts[2]});
		const boolD64nbY = await Fompb3cGku8.transferFrom.call(addressnqSe5fN, addressQuRkzU, uinttUVb01q, {from: accounts[4]});

		assert.equal(boolUnIPM70, true)
		assert.equal(boolyiqwv0y, true)
		assert.equal(uintJKNP1iE, BigInt("0"))
		assert.equal(uintWxy6NC, BigInt("0"))
		await expect(Fompb3cGku8.transferFrom.call(addressnqSe5fN, addressQuRkzU, uinttUVb01q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressjhJomgo = accounts[0]
		const FompoAWTdf0 = await Fomp.new(addressjhJomgo, {from: accounts[5]});
		const uintQQhb30o = BigInt("456")
		const addressRHGRbC2 = accounts[2]
		const uintTC8j35e = BigInt("1184")
		const addressCBH53q = accounts[0]
		const uintCDDnqJy = BigInt("162")
		const addressWXDiEgR = accounts[1]
		const addressUXPd05O = "0x0000000000000000000000000000000000000001"
		const addressGM2kCIW = "0x0000000000000000000000000000000000000001"
		const boolKUyy26 = await FompoAWTdf0.approve.call(addressRHGRbC2, uintQQhb30o, {from: accounts[1]});
		const boolnntUxCM = await FompoAWTdf0.approve.call(addressCBH53q, uintTC8j35e, {from: "0x0000000000000000000000000000000000000001"});
		const boolqxJ9xFj = await FompoAWTdf0.transferFrom.call(addressUXPd05O, addressWXDiEgR, uintCDDnqJy, {from: accounts[5]});
		const uinthUL2B5U = await FompoAWTdf0.balanceOf.call(addressGM2kCIW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKUyy26, true)
		assert.equal(boolnntUxCM, true)
		await expect(FompoAWTdf0.transferFrom.call(addressUXPd05O, addressWXDiEgR, uintCDDnqJy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressJXtk8go = accounts[0]
		const FompMzACii7 = await Fomp.new(addressJXtk8go, {from: accounts[5]});
		const uintdeVWGk2 = BigInt("205")
		const addressMTBgQmm = accounts[0]
		const uintpuQwLqn = BigInt("90")
		const addressoqfQ9ja = accounts[2]
		const boolgaATRN = await FompMzACii7.approve.call(addressMTBgQmm, uintdeVWGk2, {from: accounts[3]});
		const uint96Ablockh = await FompMzACii7.getPriorVotes.call(addressoqfQ9ja, uintpuQwLqn, {from: accounts[2]});

		assert.equal(boolgaATRN, true)
		assert.equal(uint96Ablockh, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const address16cnaD = accounts[0]
		const FompMzACii7 = await Fomp.new(address16cnaD, {from: accounts[5]});
		const addresszDk5SFA = accounts[2]
		const uintCVELKtS = BigInt("90")
		const addressrxY8FP1 = accounts[5]
		const addressGXdm0wI = "0x0000000000000000000000000000000000000001"
		const addresstBSh0y = await FompMzACii7.delegate.call(addresszDk5SFA, {from: accounts[0]});
		const uint96Ablockh = await FompMzACii7.getPriorVotes.call(addressrxY8FP1, uintCVELKtS, {from: accounts[2]});
		const addressZSoF6kG = await FompMzACii7.delegate.call(addressGXdm0wI, {from: accounts[0]});

		assert.equal(uint96Ablockh, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressMqlYqVA = accounts[4]
		const FompLhylurb = await Fomp.new(addressMqlYqVA, {from: "0x0000000000000000000000000000000000000001"});
		const addressepdYmGO = accounts[3]
		const uintyorpb3w = BigInt("1866")
		const addresswZrQMyK = accounts[1]
		const addressQcofXRI = accounts[4]
		const addressQ05Wuy7 = accounts[1]
		const addressyO6ejm = "0x0000000000000000000000000000000000000001"
		const addressWKcikNy = await FompLhylurb.delegate.call(addressepdYmGO, {from: accounts[3]});
		const boolzvPdRwC = await FompLhylurb.transferFrom.call(addressQcofXRI, addresswZrQMyK, uintyorpb3w, {from: accounts[1]});
		const uint96limimgS = await FompLhylurb.getCurrentVotes.call(addressQ05Wuy7, {from: accounts[3]});
		const uintnFvWABv = await FompLhylurb.balanceOf.call(addressyO6ejm, {from: accounts[2]});
	});
})