const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingALfKf4Z = await EqFinanceStaking.new({from: accounts[5]});
		const uintmmWq2Jd = BigInt("639")
		const addressRi2MLFR = accounts[1]
		const addresslstzMK2 = accounts[1]
		const addressHWg721 = accounts[3]
//		const uintiHPpKc = await EqFinanceStakingALfKf4Z.withdraw.call(uintmmWq2Jd, {from: accounts[2]});
//		const uintZRt3Auk = await EqFinanceStakingALfKf4Z.getPendingDivs.call(addressRi2MLFR, {from: accounts[3]});
//		const uintZBNlDwi = await EqFinanceStakingALfKf4Z.getPendingDivs.call(addresslstzMK2, {from: accounts[4]});
//		const addressj0hyhw = await EqFinanceStakingALfKf4Z.transferOwnership.call(addressHWg721, {from: accounts[0]});

		await expect(EqFinanceStakingALfKf4Z.withdraw.call(uintmmWq2Jd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingg6l0fJf = await EqFinanceStaking.new({from: accounts[4]});
		const uinty37wLB7 = BigInt("1874")
		const addressN5pIja4 = accounts[0]
		const addressCxS0HqZ = accounts[5]
		const uintGdOwOq = BigInt("1054")
//		await EqFinanceStakingg6l0fJf.onlyOwner.call({from: accounts[1]});
//		const addressIEfmba2 = await EqFinanceStakingg6l0fJf.transferAnyERC20Tokens.call(addressCxS0HqZ, addressN5pIja4, uinty37wLB7, {from: accounts[5]});
//		const uintBQ6ZrH0 = await EqFinanceStakingg6l0fJf.deposit.call(uintGdOwOq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingg6l0fJf.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingKZdpD1t = await EqFinanceStaking.new({from: accounts[4]});
		const uint1hrprI = BigInt("1568")
		const addressx6plWvB = accounts[4]
		const addressgsIvPyP = accounts[1]
		const uintrjDR6b = BigInt("627")
		const addressSNqbZTT = accounts[1]
		const uintz06is5q = BigInt("98")
//		const addressOHDEAYo = await EqFinanceStakingKZdpD1t.transferAnyERC20Tokens.call(addressgsIvPyP, addressx6plWvB, uint1hrprI, {from: "0x0000000000000000000000000000000000000001"});
//		const uintrC27LOX = await EqFinanceStakingKZdpD1t.getNumberOfHolders.call({from: accounts[3]});
//		const uintDfq6C6a = await EqFinanceStakingKZdpD1t.deposit.call(uintrjDR6b, {from: accounts[4]});
//		const uintldDEnrj = await EqFinanceStakingKZdpD1t.getPendingDivs.call(addressSNqbZTT, {from: accounts[5]});
//		const uintYlKkaiV = await EqFinanceStakingKZdpD1t.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintQSGMAHF = await EqFinanceStakingKZdpD1t.deposit.call(uintz06is5q, {from: accounts[1]});

		await expect(EqFinanceStakingKZdpD1t.transferAnyERC20Tokens.call(addressgsIvPyP, addressx6plWvB, uint1hrprI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingsAbLY3z = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOvfbyQk = accounts[2]
		const addressmnBFMON = accounts[0]
		const uintfqvM837 = BigInt("1333")
		const uintqMpIbdd = BigInt("175")
		const uint58HJnJ = await EqFinanceStakingsAbLY3z.getPendingDivs.call(addressOvfbyQk, {from: accounts[3]});
		await EqFinanceStakingsAbLY3z.onlyOwner.call({from: accounts[1]});
		const uintqd2s0qs = await EqFinanceStakingsAbLY3z.getPendingDivs.call(addressmnBFMON, {from: accounts[0]});
		const uintKiecGkE = await EqFinanceStakingsAbLY3z.deposit.call(uintfqvM837, {from: "0x0000000000000000000000000000000000000001"});
		await EqFinanceStakingsAbLY3z.claimDivs.call({from: accounts[4]});
		const uinte5c1UNH = await EqFinanceStakingsAbLY3z.deposit.call(uintqMpIbdd, {from: accounts[3]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingFmULHNN = await EqFinanceStaking.new({from: accounts[0]});
		const uinttJjct9g = BigInt("551")
		const addressTc6SMJJ = accounts[2]
		const addressLvF5EJl = accounts[2]
		const uintDWlrQVh = BigInt("2010")
		const uintZTeutnk = BigInt("1062")
		const addressl36asXI = accounts[0]
		const addressL8XciQ = accounts[5]
		const uintpd0PLF = await EqFinanceStakingFmULHNN.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressGcO5IUE = await EqFinanceStakingFmULHNN.transferAnyERC20Tokens.call(addressLvF5EJl, addressTc6SMJJ, uinttJjct9g, {from: accounts[1]});
//		const uintZSFkoga = await EqFinanceStakingFmULHNN.withdraw.call(uintDWlrQVh, {from: accounts[3]});
//		await EqFinanceStakingFmULHNN.onlyOwner.call({from: accounts[4]});
//		const addressQVMjbGZ = await EqFinanceStakingFmULHNN.transferAnyERC20Tokens.call(addressL8XciQ, addressl36asXI, uintZTeutnk, {from: accounts[4]});

		assert.equal(uintpd0PLF, BigInt("0"))
		await expect(EqFinanceStakingFmULHNN.transferAnyERC20Tokens.call(addressLvF5EJl, addressTc6SMJJ, uinttJjct9g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingHIp1hb6 = await EqFinanceStaking.new({from: accounts[0]});
		const addressyuzzUOq = accounts[3]
		const uintG1Vfxnp = BigInt("944")
		const uintokFIM8e = BigInt("1477")
		const addressfArvbtw = accounts[3]
		const addressZqB0o1a = accounts[0]
		const addressak1BYb = await EqFinanceStakingHIp1hb6.transferOwnership.call(addressyuzzUOq, {from: accounts[0]});
//		const uintlyTnEnB = await EqFinanceStakingHIp1hb6.withdraw.call(uintG1Vfxnp, {from: accounts[5]});
//		const uintA72SHP = await EqFinanceStakingHIp1hb6.getNumberOfHolders.call({from: accounts[5]});
//		const addressBOsgDaQ = await EqFinanceStakingHIp1hb6.transferAnyERC20Tokens.call(addressZqB0o1a, addressfArvbtw, uintokFIM8e, {from: accounts[1]});

		await expect(EqFinanceStakingHIp1hb6.withdraw.call(uintG1Vfxnp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingFdrdgi = await EqFinanceStaking.new({from: accounts[2]});
		const addressQjylCau = accounts[2]
//		await EqFinanceStakingFdrdgi.claimDivs.call({from: accounts[4]});
//		await EqFinanceStakingFdrdgi.claimDivs.call({from: accounts[3]});
//		await EqFinanceStakingFdrdgi.onlyOwner.call({from: accounts[2]});
//		await EqFinanceStakingFdrdgi.onlyOwner.call({from: accounts[2]});
//		const addressQHmqKYE = await EqFinanceStakingFdrdgi.transferOwnership.call(addressQjylCau, {from: accounts[4]});
//		await EqFinanceStakingFdrdgi.claimDivs.call({from: accounts[3]});

		await expect(EqFinanceStakingFdrdgi.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingALfKf4Z = await EqFinanceStaking.new({from: accounts[5]});
		const addressvkNOt70 = accounts[1]
		const uintIjihaDa = BigInt("933")
		const addressOsJ9MW = accounts[1]
		const addressOhv2EVY = accounts[4]
		const uintZRt3Auk = await EqFinanceStakingALfKf4Z.getPendingDivs.call(addressvkNOt70, {from: accounts[3]});
//		const uintlEuFBC = await EqFinanceStakingALfKf4Z.deposit.call(uintIjihaDa, {from: accounts[0]});
//		const uintZBNlDwi = await EqFinanceStakingALfKf4Z.getPendingDivs.call(addressOsJ9MW, {from: accounts[4]});
//		const addressj0hyhw = await EqFinanceStakingALfKf4Z.transferOwnership.call(addressOhv2EVY, {from: accounts[0]});

		assert.equal(uintZRt3Auk, BigInt("0"))
		await expect(EqFinanceStakingALfKf4Z.deposit.call(uintIjihaDa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingALfKf4Z = await EqFinanceStaking.new({from: accounts[5]});
		const addresskpZYUaA = accounts[1]
		const addressXu3KUCV = accounts[1]
		const addressTz26Bxh = accounts[3]
		const uintZRt3Auk = await EqFinanceStakingALfKf4Z.getPendingDivs.call(addresskpZYUaA, {from: accounts[3]});
		const uintGkO8bEH = await EqFinanceStakingALfKf4Z.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintZBNlDwi = await EqFinanceStakingALfKf4Z.getPendingDivs.call(addressXu3KUCV, {from: accounts[4]});
		const uintUMemgNT = await EqFinanceStakingALfKf4Z.getPendingDivs.call(addressTz26Bxh, {from: accounts[4]});

		assert.equal(uintGkO8bEH, BigInt("3000000000000000000000000"))
		assert.equal(uintUMemgNT, BigInt("0"))
		assert.equal(uintZBNlDwi, BigInt("0"))
		assert.equal(uintZRt3Auk, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingUB83Sa5 = await EqFinanceStaking.new({from: accounts[4]});
		const uintjXPiqHU = BigInt("440")
		const addressvTdvYyA = accounts[4]
		const addresswsWB5yI = accounts[2]
		const uintZsFzbVj = BigInt("1010")
		const addresscZovOGe = accounts[4]
		const uintaVB6MQD = BigInt("1840")
		const addressbtUayPi = accounts[2]
		const addressdQbyfZS = accounts[0]
//		await EqFinanceStakingUB83Sa5.claimDivs.call({from: accounts[0]});
//		await EqFinanceStakingUB83Sa5.claimDivs.call({from: accounts[4]});
//		const addressqxZl92Q = await EqFinanceStakingUB83Sa5.transferAnyERC20Tokens.call(addresswsWB5yI, addressvTdvYyA, uintjXPiqHU, {from: accounts[4]});
//		const uintfB6gVOL = await EqFinanceStakingUB83Sa5.deposit.call(uintZsFzbVj, {from: "0x0000000000000000000000000000000000000001"});
//		const uintV1qBYs = await EqFinanceStakingUB83Sa5.getPendingDivs.call(addresscZovOGe, {from: accounts[3]});
//		const addressIrsDHHB = await EqFinanceStakingUB83Sa5.transferAnyERC20Tokens.call(addressdQbyfZS, addressbtUayPi, uintaVB6MQD, {from: accounts[0]});

		await expect(EqFinanceStakingUB83Sa5.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})