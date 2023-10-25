const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressWIOxOUH = accounts[0]
		const Votinge8Kdr9Y = await Voting.new(addressWIOxOUH, {from: accounts[3]});
		const addresssBm47HC = accounts[5]
		const uintd094zVK = BigInt("444")
		const uintGQpnxJn = BigInt("1700")
		const addressUd9EJ9b = accounts[5]
		const addressfq8t5cz = accounts[2]
		const uintmaZKZY3 = BigInt("1562")
		const addressSbtOMZb = accounts[5]
		const boolIIR91Db = await Votinge8Kdr9Y.didAddressVote.call(uintd094zVK, addresssBm47HC, {from: accounts[1]});
		await Votinge8Kdr9Y.requiresLiquidityTokenSnapshotAccess.call({from: accounts[3]});
		const boolLvlFbKg = await Votinge8Kdr9Y.transferFrom.call(addressfq8t5cz, addressUd9EJ9b, uintGQpnxJn, {from: accounts[1]});
		const booljHbhPm7 = await Votinge8Kdr9Y.approve.call(addressSbtOMZb, uintmaZKZY3, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const address4g4DVo = accounts[3]
		const Voting4OdIrq = await Voting.new(address4g4DVo, {from: "0x0000000000000000000000000000000000000001"});
		const addressilqz5DV = accounts[3]
		const addresssoEnNlf = accounts[1]
		const uint256WjlkpxH = await Voting4OdIrq.allowance.call(addresssoEnNlf, addressilqz5DV, {from: accounts[1]});
		await Voting4OdIrq.onlyExchangeFactory.call({from: accounts[3]});
		await Voting4OdIrq.renounceMinter.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressL0Y7DLW = accounts[0]
		const VotingXqtGBz = await Voting.new(addressL0Y7DLW, {from: accounts[5]});
		const addressZTwFFyA = accounts[2]
		await VotingXqtGBz.onRegistryRefresh.call({from: accounts[5]});
		const boolnLvHGYS = await VotingXqtGBz.isValidVerifierAddress.call(addressZTwFFyA, {from: accounts[4]});
		await VotingXqtGBz.onRegistryRefresh.call({from: accounts[0]});
		await VotingXqtGBz.renounceMinter.call({from: accounts[3]});
		const uint256u6e5OEW = await VotingXqtGBz.totalSupply.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressNS0bD9k = accounts[0]
		const VotingZGgQYi2 = await Voting.new(addressNS0bD9k, {from: accounts[1]});
		const address5dDFIe = accounts[1]
		const uintg5uOYQf = BigInt("906")
		const addressdIZQR2k = accounts[5]
		const addresszXPqPG = accounts[0]
		const boolIQlNfS = await VotingZGgQYi2.isValidStamperAddress.call(address5dDFIe, {from: "0x0000000000000000000000000000000000000001"});
		await VotingZGgQYi2.onlyExchangeFactory.call({from: accounts[1]});
		await VotingZGgQYi2.onRegistryRefresh.call({from: accounts[1]});
		const boolmyF2YU = await VotingZGgQYi2.transferFrom.call(addresszXPqPG, addressdIZQR2k, uintg5uOYQf, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressiUyISkc = accounts[2]
		const VotingtqQJS42 = await Voting.new(addressiUyISkc, {from: accounts[0]});
		const uintCmrde8u = BigInt("1492")
		const uintBl7Hu7J = BigInt("1328")
		const addressoYAGF7t = "0x0000000000000000000000000000000000000001"
		const addressePEbI2l = accounts[5]
		const uintQYCVMyv = BigInt("1321")
		const addressVV0845f = accounts[0]
		const uint256kMlt0J4 = await VotingtqQJS42.pause.call(uintCmrde8u, {from: accounts[0]});
		const boolzSwX3tU = await VotingtqQJS42.transfer.call(addressoYAGF7t, uintBl7Hu7J, {from: accounts[1]});
		const boolmZpr0v6 = await VotingtqQJS42.isValidOracleAddress.call(addressePEbI2l, {from: accounts[2]});
		const uint256tFdLnTi = await VotingtqQJS42.balanceOfAt.call(addressVV0845f, uintQYCVMyv, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const Votingsvwqlr1 = await Voting.new({from: accounts[3]});
		const uintaWtiO3c = BigInt("1331")
		const addressMZEOhXT = accounts[1]
		const addresskNXIEOL = accounts[3]
		await Votingsvwqlr1.onlyRegistry.call({from: accounts[3]});
		const boolQGUgi3k = await Votingsvwqlr1.approve.call(addressMZEOhXT, uintaWtiO3c, {from: accounts[3]});
		const booljy4vzVE = await Votingsvwqlr1.isValidOracleAddress.call(addresskNXIEOL, {from: accounts[4]});
		await Votingsvwqlr1.onlyExchangeFactory.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressGRdFw4 = accounts[3]
		const VotingecpJBzm = await Voting.new(addressGRdFw4, {from: accounts[1]});
		const addresspgOzuXE = accounts[1]
		const addresscmnWVSH = accounts[0]
		const uintVh5QWEc = BigInt("1723")
		const addressTeY38vw = accounts[5]
		const bool6rzhTB = await VotingecpJBzm.isExchangeFactory.call(addresspgOzuXE, {from: accounts[1]});
		await VotingecpJBzm.onlyExchange.call({from: accounts[0]});
		await VotingecpJBzm.onlyMessageProcessor.call({from: accounts[5]});
		const booleWD79Bu = await VotingecpJBzm.isMinter.call(addresscmnWVSH, {from: accounts[2]});
		await VotingecpJBzm.onlyExchange.call({from: "0x0000000000000000000000000000000000000001"});
		const stringtU5J4BW = await VotingecpJBzm.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUYfT6G = await VotingecpJBzm.transfer.call(addressTeY38vw, uintVh5QWEc, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressbOWqg9H = accounts[2]
		const VotingtqQJS42 = await Voting.new(addressbOWqg9H, {from: accounts[0]});
		const addressnmZyC5w = accounts[5]
		const uintpNyxcuj = BigInt("1321")
		const addressQV3dzUQ = accounts[1]
		const uintfjYZIan = BigInt("964")
		const addressSR6EWj = accounts[3]
		const boolmZpr0v6 = await VotingtqQJS42.isValidOracleAddress.call(addressnmZyC5w, {from: accounts[2]});
		await VotingtqQJS42.renounceOwnership.call({from: accounts[4]});
		const uint256tFdLnTi = await VotingtqQJS42.balanceOfAt.call(addressQV3dzUQ, uintpNyxcuj, {from: "0x0000000000000000000000000000000000000001"});
		const boolbBle8G6 = await VotingtqQJS42.transfer.call(addressSR6EWj, uintfjYZIan, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingOajF3MF = await Voting.new({from: accounts[0]});
		const addressEyHCK03 = accounts[3]
		const addressrPUlTgK = accounts[2]
		const uintJDYoxa3 = BigInt("1481")
		const addressjVHLIyO = accounts[5]
		await VotingOajF3MF.onlyOwner.call({from: accounts[4]});
		const uint256XethnP0 = await VotingOajF3MF.allowance.call(addressrPUlTgK, addressEyHCK03, {from: accounts[1]});
		await VotingOajF3MF.nonReentrant.call({from: accounts[0]});
		await VotingOajF3MF.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
		const boolJAdCNxM = await VotingOajF3MF.transfer.call(addressjVHLIyO, uintJDYoxa3, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressMYCYtTc = accounts[2]
		const VotingtqQJS42 = await Voting.new(addressMYCYtTc, {from: accounts[0]});
		const addressyAFRGD6 = "0x0000000000000000000000000000000000000001"
		const uintj52KJEk = BigInt("1492")
		const uintDQ6QAtO = BigInt("1863")
		const uintRVBJSGf = BigInt("1328")
		const addressIuwBIfT = "0x0000000000000000000000000000000000000001"
		const addresseuVc4SD = accounts[7]
		const uintsv8OjRO = BigInt("1321")
		const addressCvLeArA = accounts[0]
		const addressEs4hnJb = await VotingtqQJS42.ownableUpgrade.call(addressyAFRGD6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kMlt0J4 = await VotingtqQJS42.pause.call(uintj52KJEk, {from: accounts[0]});
		const uint256GPJFrOq = await VotingtqQJS42.resolve.call(uintDQ6QAtO, {from: accounts[3]});
		await VotingtqQJS42.requiresWalletAcccess.call({from: "0x0000000000000000000000000000000000000001"});
		await VotingtqQJS42.onlyExchangeFactory.call({from: accounts[5]});
		const boolzSwX3tU = await VotingtqQJS42.transfer.call(addressIuwBIfT, uintRVBJSGf, {from: accounts[1]});
		const uint256v138mlY = await VotingtqQJS42.snapshot.call({from: accounts[2]});
		const boolmZpr0v6 = await VotingtqQJS42.isValidOracleAddress.call(addresseuVc4SD, {from: accounts[2]});
		const uint256tFdLnTi = await VotingtqQJS42.balanceOfAt.call(addressCvLeArA, uintsv8OjRO, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressiyr22qF = accounts[2]
		const VotingtqQJS42 = await Voting.new(addressiyr22qF, {from: accounts[0]});
		const addresszEbVDC = accounts[5]
		const uintT0o1kdG = BigInt("1492")
		const uintcvC6aXk = BigInt("1328")
		const addressB6BhHGk = "0x0000000000000000000000000000000000000001"
		const addressDOQLBZa = accounts[1]
		const uintPBLKObV = BigInt("1624")
		const addressfk1DHRE = accounts[4]
		const addressMFaLcko = accounts[6]
		const uintefE0tTD = BigInt("1310")
		const addressXEm5dF = accounts[2]
		const boolge9p5IT = await VotingtqQJS42.isValidVerifierAddress.call(addresszEbVDC, {from: accounts[3]});
		const uint256kMlt0J4 = await VotingtqQJS42.pause.call(uintT0o1kdG, {from: accounts[0]});
		const boolzSwX3tU = await VotingtqQJS42.transfer.call(addressB6BhHGk, uintcvC6aXk, {from: accounts[1]});
		const boolf18emR3 = await VotingtqQJS42.isVotingSystem.call(addressDOQLBZa, {from: accounts[2]});
		const boolo8a0ar7 = await VotingtqQJS42.increaseAllowance.call(addressfk1DHRE, uintPBLKObV, {from: accounts[1]});
		const boolmZpr0v6 = await VotingtqQJS42.isValidOracleAddress.call(addressMFaLcko, {from: accounts[2]});
		await VotingtqQJS42.renounceOwnership.call({from: accounts[2]});
		const uint256tFdLnTi = await VotingtqQJS42.balanceOfAt.call(addressXEm5dF, uintefE0tTD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addresskZ1DXsC = accounts[1]
		const VotingQ5zkdQw = await Voting.new(addresskZ1DXsC, {from: accounts[4]});
		const addressIhhBQAQ = accounts[2]
		const uintFKaBtB1 = BigInt("46")
		const addressHYSokT = accounts[4]
		const boolCajEAFB = true
		const uintOUZLefG = BigInt("1049")
		const addresseFkvu10 = accounts[0]
		const uintZOMjJ3w = BigInt("1164")
		const boolTXlPafB = await VotingQ5zkdQw.didAddressVote.call(uintFKaBtB1, addressIhhBQAQ, {from: accounts[2]});
		const boolHG5WNUh = await VotingQ5zkdQw.isVotingSystem.call(addressHYSokT, {from: accounts[4]});
		const uint256WAvr85 = await VotingQ5zkdQw.vote.call(uintOUZLefG, boolCajEAFB, {from: accounts[0]});
		const addressvtOMJeD = await VotingQ5zkdQw.addMinter.call(addresseFkvu10, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VIMuyH = await VotingQ5zkdQw.burn.call(uintZOMjJ3w, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingsHLhPqr = await Voting.new({from: accounts[1]});
		const addressPUYbkv = accounts[1]
		const uintTayMIzZ = BigInt("842")
		const uintwQvRWtt = BigInt("1232")
		const addressfNTREmK = await VotingsHLhPqr.getRegistryAddress.call({from: accounts[2]});
		const boolXOXmbbK = await VotingsHLhPqr.didAddressVote.call(uintTayMIzZ, addressPUYbkv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TUWifE = await VotingsHLhPqr.pause.call(uintwQvRWtt, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingtBagrxB = await Voting.new({from: accounts[4]});
		const uintBTNSux5 = BigInt("379")
		const addresso4JtYP3 = accounts[3]
		const addressjzZDLNx = accounts[1]
		const uint256uDtyLFK = await VotingtBagrxB.snapshot.call({from: "0x0000000000000000000000000000000000000001"});
		const addresskVHG6yI = await VotingtBagrxB.burnFrom.call(addresso4JtYP3, uintBTNSux5, {from: accounts[1]});
		await VotingtBagrxB.onlyExchange.call({from: accounts[2]});
		const addressURQ6ITK = await VotingtBagrxB.transferOwnership.call(addressjzZDLNx, {from: accounts[0]});
		await VotingtBagrxB.onlyExchangeFactory.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressGf41gfE = accounts[2]
		const VotingtqQJS42 = await Voting.new(addressGf41gfE, {from: accounts[0]});
		const stringPtSePb0 = "L4qySxoJMEEavaWRhvQIDkWztSr7cIUhiyT4wpiWniidREq7cvz9XKa5p6w04nDgvg0uNjW4FLoJmQfIny10MVD"
		const stringZgzWZG = "szWx6z7wrpMTM"
		const stringXh0Pzo5 = "aCe3EShhHDCgKtgg2RnG4BGf1EQ7QobTyVCRNViejtlzW9eq6zEdrDiinfMVQLcn966UKVMWMe4ol"
		const bytem1sen1R = "0x1e06161908081e0e1a080b0d"
		const addressNfqzaTC = accounts[3]
		const addressccNvs1Y = accounts[3]
		const uintGGqgNLC = BigInt("1492")
		const uintULspKWY = BigInt("1863")
		const uinthpj1lfo = BigInt("1328")
		const addresssVGPmG = "0x0000000000000000000000000000000000000001"
		const address7BIdbW = accounts[6]
		const uintOZb1FBr = BigInt("1321")
		const addressRRE1Csl = accounts[0]
		const 
KC7ykz4 = await VotingtqQJS42.createProposal.call(addressNfqzaTC, bytem1sen1R, stringXh0Pzo5, stringZgzWZG, stringPtSePb0, {from: accounts[4]});
		const uint256zmxRIjg = await VotingtqQJS42.balanceOf.call(addressccNvs1Y, {from: accounts[3]});
		const uint256kMlt0J4 = await VotingtqQJS42.pause.call(uintGGqgNLC, {from: accounts[0]});
		const uint256GPJFrOq = await VotingtqQJS42.resolve.call(uintULspKWY, {from: accounts[3]});
		await VotingtqQJS42.requiresWalletAcccess.call({from: "0x0000000000000000000000000000000000000001"});
		await VotingtqQJS42.onlyExchangeFactory.call({from: accounts[5]});
		const boolzSwX3tU = await VotingtqQJS42.transfer.call(addresssVGPmG, uinthpj1lfo, {from: accounts[1]});
		const boolmZpr0v6 = await VotingtqQJS42.isValidOracleAddress.call(address7BIdbW, {from: accounts[2]});
		const uint256tFdLnTi = await VotingtqQJS42.balanceOfAt.call(addressRRE1Csl, uintOZb1FBr, {from: "0x0000000000000000000000000000000000000001"});
	});
})