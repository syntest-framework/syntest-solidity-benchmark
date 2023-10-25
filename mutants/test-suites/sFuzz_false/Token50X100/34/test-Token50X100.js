const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100pq8Iso3 = await Token50X100.new({from: accounts[0]});
		const uintBbrDka = BigInt("1849")
		const addressnpOZhW2 = accounts[5]
		const addressdGc9PKq = accounts[3]
		const addressWAMRHV1 = accounts[0]
		const addressMCt4csh = "0x0000000000000000000000000000000000000001"
//		const boolkaltyD = await Token50X100pq8Iso3.issueTokens.call(addressdGc9PKq, addressnpOZhW2, uintBbrDka, {from: accounts[4]});
//		const addressevgQc4C = await Token50X100pq8Iso3.transferOwnership.call(addressWAMRHV1, {from: accounts[0]});
//		const uint256Cevrorb = await Token50X100pq8Iso3.balanceOf.call(addressMCt4csh, {from: accounts[0]});

		await expect(Token50X100pq8Iso3.issueTokens.call(addressdGc9PKq, addressnpOZhW2, uintBbrDka, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Twci9Qc = await Token50X100.new({from: accounts[3]});
		const uintADwmuC4 = BigInt("490")
		const addressei0kC1B = accounts[2]
		const addressD1LrB8U = accounts[3]
		const addressxj9wmAl = accounts[1]
		const boolNADxZeP = await Token50X100Twci9Qc.setMaxLockPeriod.call(uintADwmuC4, {from: accounts[5]});
//		await Token50X100Twci9Qc.setTokenContract.call(addressei0kC1B, {from: accounts[1]});
//		const uint256hFqcBq4 = await Token50X100Twci9Qc.totalSupply.call({from: accounts[2]});
//		const uint256vkCCzLG = await Token50X100Twci9Qc.allowance.call(addressxj9wmAl, addressD1LrB8U, {from: accounts[2]});

		assert.equal(boolNADxZeP, false)
		await expect(Token50X100Twci9Qc.setTokenContract.call(addressei0kC1B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Zt7oT28 = await Token50X100.new({from: accounts[0]});
		const addressuaPhNi = accounts[1]
		const uintVjMHERM = BigInt("582")
		const uintR422KBv = BigInt("872")
		const addressLAqhmrw = accounts[3]
		const addressLcSdCjr = accounts[0]
		const uintKxKsbrw = BigInt("1161")
		const uintyaS6aLc = BigInt("661")
		const uintZ9h4uG = BigInt("576")
		const uintA8e3V3a = BigInt("634")
		const addressPwtGabG = accounts[2]
		const uintQ66CbCS = BigInt("379")
		const addressP2s7vZc = "0x0000000000000000000000000000000000000001"
		const addressubftrze = accounts[4]
//		await Token50X100Zt7oT28.setTokenContract.call(addressuaPhNi, {from: accounts[0]});
//		const boolUqM1Zc = await Token50X100Zt7oT28._transfer.call(addressLcSdCjr, addressLAqhmrw, uintR422KBv, uintVjMHERM, {from: accounts[4]});
//		const boolGV6zZCl = await Token50X100Zt7oT28.safeLock.call(uintyaS6aLc, uintKxKsbrw, {from: accounts[0]});
//		const boolcirczcQ = await Token50X100Zt7oT28.setVesting.call(addressPwtGabG, uintA8e3V3a, uintZ9h4uG, {from: accounts[0]});
//		await Token50X100Zt7oT28.release.call({from: accounts[0]});
//		const booltvgpWCC = await Token50X100Zt7oT28.transferFrom.call(addressubftrze, addressP2s7vZc, uintQ66CbCS, {from: accounts[4]});

		await expect(Token50X100Zt7oT28.setTokenContract.call(addressuaPhNi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PkpNsVu = await Token50X100.new({from: accounts[1]});
		const uintoVqXWri = BigInt("641")
		const addressZ8XwHc = accounts[2]
		const addressp4eicuW = accounts[3]
		const uint7Zbf2c = BigInt("1900")
		const uintQxtUBT9 = BigInt("1785")
		const addresshe1XyE = "0x0000000000000000000000000000000000000001"
//		const boolLySyFbh = await Token50X100PkpNsVu.transferFrom.call(addressp4eicuW, addressZ8XwHc, uintoVqXWri, {from: accounts[3]});
//		const boolGF2Oee = await Token50X100PkpNsVu.setVesting.call(addresshe1XyE, uintQxtUBT9, uint7Zbf2c, {from: accounts[0]});

		await expect(Token50X100PkpNsVu.transferFrom.call(addressp4eicuW, addressZ8XwHc, uintoVqXWri, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100BjqJJeA = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqxxEMao = accounts[3]
		const addressNjqDooG = accounts[4]
		const uintc2CoB52 = BigInt("237")
		const addressrj8KGN = accounts[2]
		const uint256qAbfpx = await Token50X100BjqJJeA.allowance.call(addressNjqDooG, addressqxxEMao, {from: accounts[1]});
		const boolnljVMpp = await Token50X100BjqJJeA.transfer.call(addressrj8KGN, uintc2CoB52, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Token50X100', async () => {
		const Token50X100fFFMmUb = await Token50X100.new({from: accounts[5]});
		const addressJ54dKJ7 = accounts[2]
		const addressS5AvuY = accounts[3]
		const uintmB2I5g = BigInt("1")
		const stringVxh5ILd = "vbeZCXJf4Myq8zUHpgw80gBUpieZRoepir5JPLIUDTRccLIvh9w6Uw5fDGUnaElr9xgaRfYB1OY42T"
		const stringqU4PHs = "5sbVVSvLvZraPM7TmgCSzOaJKC2zOu9eEU"
		const uintLZtjRIz = BigInt("1132")
		const addresskh6fcyn = accounts[0]
		const uinthgsv69 = BigInt("99")
		const stringPqT3UJA = "vtxdXdic9awm5pG2zqgHVV8MjJmn1i74imyENERlgzcGoK1bo3WJTozGT4368MTL93TDFTKwlmjQtOqdMn1qhnNJqRqnd9YMWr"
		const stringhZqWGRB = "i7DVnDij2X5gbTtGJrTJo7toQN21tId7UuvFLcxjb9jJ729MOh9f057saHfS7B80LNudVrM1V"
		const uint256h4m8kK8 = await Token50X100fFFMmUb.allowance.call(addressS5AvuY, addressJ54dKJ7, {from: accounts[2]});
//		await Token50X100fFFMmUb.setSymbolNameDecimals.call(stringqU4PHs, stringVxh5ILd, uintmB2I5g, {from: accounts[3]});
//		const boolnklukB0 = await Token50X100fFFMmUb.transfer.call(addresskh6fcyn, uintLZtjRIz, {from: accounts[4]});
//		const booloY5AID6 = await Token50X100fFFMmUb.setSymbolNameDecimals.call(stringhZqWGRB, stringPqT3UJA, uinthgsv69, {from: accounts[1]});

		assert.equal(uint256h4m8kK8, BigInt("0"))
		await expect(Token50X100fFFMmUb.setSymbolNameDecimals.call(stringqU4PHs, stringVxh5ILd, uintmB2I5g, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Eh9p8lb = await Token50X100.new({from: accounts[1]});
		const uintPIRfBXB = BigInt("1792")
		const addressLfjeH2X = accounts[5]
		const uintuhUAq0b = BigInt("17")
		const addressNXNUdzQ = accounts[4]
		const addressHbtUKAm = accounts[4]
		const uintM3BR06G = BigInt("484")
		const uintPP7QkV1 = BigInt("1603")
//		const boolaU8rzem = await Token50X100Eh9p8lb.transfer.call(addressLfjeH2X, uintPIRfBXB, {from: accounts[1]});
//		await Token50X100Eh9p8lb.lock.call({from: accounts[4]});
//		const boolByDglP4 = await Token50X100Eh9p8lb.transfer.call(addressNXNUdzQ, uintuhUAq0b, {from: accounts[4]});
//		const addressxiCGxos = await Token50X100Eh9p8lb.transferOwnership.call(addressHbtUKAm, {from: accounts[1]});
//		const boolTxAnUqN = await Token50X100Eh9p8lb.safeLock.call(uintPP7QkV1, uintM3BR06G, {from: accounts[1]});

		await expect(Token50X100Eh9p8lb.transfer.call(addressLfjeH2X, uintPIRfBXB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PkpNsVu = await Token50X100.new({from: accounts[1]});
		const uintmkkwmzb = BigInt("895")
		const uintHt791k = BigInt("289")
		const uintZpjYMRT = BigInt("1900")
		const uintWSJUG96 = BigInt("1785")
		const addressDjYMHbY = "0x0000000000000000000000000000000000000000"
//		const boolh8NEAOq = await Token50X100PkpNsVu.safeLock.call(uintHt791k, uintmkkwmzb, {from: accounts[5]});
//		const boolGF2Oee = await Token50X100PkpNsVu.setVesting.call(addressDjYMHbY, uintWSJUG96, uintZpjYMRT, {from: accounts[0]});

		await expect(Token50X100PkpNsVu.safeLock.call(uintHt791k, uintmkkwmzb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100LChqTp = await Token50X100.new({from: accounts[1]});
		const uintEYgXOvQ = BigInt("480")
		const addressPKSJ6h = accounts[2]
		const uintmW6RwAc = BigInt("1422")
		const uintgSg91Tc = BigInt("689")
		const addresssZjlVBk = accounts[4]
		const uintAJAllCS = BigInt("335")
		const uintt8sZVIF = BigInt("767")
		const addresswiBPA0j = accounts[1]
		const addressUDPZDh5 = accounts[3]
		const uintvAe9xs5 = BigInt("418")
		const uintP9CIwGr = BigInt("877")
		const addressQfPspbx = accounts[4]
		const addressJ0LcTZ = accounts[0]
		const boolTlINyX = false
		const addressNQ0B7U6 = accounts[0]
		const boolp5O3gzu = await Token50X100LChqTp.approve.call(addressPKSJ6h, uintEYgXOvQ, {from: accounts[5]});
//		const boolPzaZKps = await Token50X100LChqTp.setVesting.call(addresssZjlVBk, uintgSg91Tc, uintmW6RwAc, {from: accounts[5]});
//		const boolG22mQbu = await Token50X100LChqTp._transfer.call(addressUDPZDh5, addresswiBPA0j, uintt8sZVIF, uintAJAllCS, {from: accounts[2]});
//		await Token50X100LChqTp.release.call({from: accounts[1]});
//		const boolJfDZNvx = await Token50X100LChqTp._transfer.call(addressJ0LcTZ, addressQfPspbx, uintP9CIwGr, uintvAe9xs5, {from: accounts[4]});
//		await Token50X100LChqTp.setWhiteList.call(addressNQ0B7U6, boolTlINyX, {from: accounts[0]});

		assert.equal(boolp5O3gzu, true)
		await expect(Token50X100LChqTp.setVesting.call(addresssZjlVBk, uintgSg91Tc, uintmW6RwAc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PkpNsVu = await Token50X100.new({from: accounts[1]});
		const uintp4unpMZ = BigInt("508")
		const addressZ0x8qbI = accounts[1]
		const uintX8yXlN4 = BigInt("1919")
		const uintXoeTlkR = BigInt("1785")
		const addressPwYuE61 = "0x0000000000000000000000000000000000000001"
		const bool28xieZ = await Token50X100PkpNsVu.decreaseApproval.call(addressZ0x8qbI, uintp4unpMZ, {from: accounts[2]});
//		const boolGF2Oee = await Token50X100PkpNsVu.setVesting.call(addressPwYuE61, uintXoeTlkR, uintX8yXlN4, {from: accounts[0]});

		assert.equal(bool28xieZ, true)
		await expect(Token50X100PkpNsVu.setVesting.call(addressPwYuE61, uintXoeTlkR, uintX8yXlN4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100LIup8o5 = await Token50X100.new({from: accounts[1]});
		const addressLMJQYDQ = accounts[2]
		const addressv34hcWp = accounts[3]
		const uintVmsSMpf = BigInt("1679")
		const uintTKDFJ5P = BigInt("831")
		const uintxzYHmId = BigInt("990")
		const addressXaBcgzM = accounts[2]
		const uintp6x6yW = BigInt("241")
		const uintM5dX8TY = BigInt("942")
		const addressGwslejF = accounts[0]
		const addressiNvd2Sz = accounts[2]
//		await Token50X100LIup8o5.setLinkingAddresses.call(addressv34hcWp, addressLMJQYDQ, {from: accounts[1]});
//		const booltiuFGoT = await Token50X100LIup8o5.setMaxLockPeriod.call(uintVmsSMpf, {from: accounts[3]});
//		const boolvfhAjzd = await Token50X100LIup8o5.setVesting.call(addressXaBcgzM, uintxzYHmId, uintTKDFJ5P, {from: accounts[5]});
//		const boolQ4egjYv = await Token50X100LIup8o5.setMaxLockPeriod.call(uintp6x6yW, {from: accounts[5]});
//		const boolsm4pRi = await Token50X100LIup8o5.transferFrom.call(addressiNvd2Sz, addressGwslejF, uintM5dX8TY, {from: accounts[3]});

		await expect(Token50X100LIup8o5.setLinkingAddresses.call(addressv34hcWp, addressLMJQYDQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Eh9p8lb = await Token50X100.new({from: accounts[1]});
		const uintKWHJUaT = BigInt("178")
		const uintJlvw4fO = BigInt("496")
		const addressOlp7SoI = accounts[2]
		const addressxtkRj7k = accounts[1]
		const uintpypRsQ3 = BigInt("1792")
		const addressSB7OzoX = accounts[7]
//		const boolWU3awY = await Token50X100Eh9p8lb._transfer.call(addressxtkRj7k, addressOlp7SoI, uintJlvw4fO, uintKWHJUaT, {from: accounts[1]});
//		const boolaU8rzem = await Token50X100Eh9p8lb.transfer.call(addressSB7OzoX, uintpypRsQ3, {from: accounts[1]});

		await expect(Token50X100Eh9p8lb._transfer.call(addressxtkRj7k, addressOlp7SoI, uintJlvw4fO, uintKWHJUaT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Eh9p8lb = await Token50X100.new({from: accounts[1]});
		const uintRWCWha = BigInt("140")
		const stringmFkZLt2 = "8qpLL8uDEw7AxjwEmrk2vcIeQ6idfUI"
		const stringwLD6PQF = "r5UQkGK1pCVFuTqR2Hb1CqxSTaHjdCVWhdTpiFgLaF9goonKXpkDxq9g0qK73oFlWg2GG15HQx2MJ"
		const uintLzUzcub = BigInt("426")
		const addresshRvaeiN = accounts[4]
		const addressEaESWV = accounts[4]
		const uintMgcY8QI = BigInt("549")
		const uintefpwT7L = BigInt("1521")
		const addressP3jjrgp = accounts[2]
		const addressuJ0rc8r = "0x0000000000000000000000000000000000000001"
		const uintcXU1lYW = BigInt("1792")
		const addressaDH1A0d = accounts[6]
		const boolUkmeFTo = await Token50X100Eh9p8lb.setSymbolNameDecimals.call(stringwLD6PQF, stringmFkZLt2, uintRWCWha, {from: accounts[1]});
//		const boolpDLc1xl = await Token50X100Eh9p8lb.transferFrom.call(addressEaESWV, addresshRvaeiN, uintLzUzcub, {from: accounts[2]});
//		const boolvFT9Znd = await Token50X100Eh9p8lb._transfer.call(addressuJ0rc8r, addressP3jjrgp, uintefpwT7L, uintMgcY8QI, {from: accounts[4]});
//		await Token50X100Eh9p8lb.lock.call({from: accounts[4]});
//		const boolaU8rzem = await Token50X100Eh9p8lb.transfer.call(addressaDH1A0d, uintcXU1lYW, {from: accounts[1]});

		await expect(Token50X100Eh9p8lb.transferFrom.call(addressEaESWV, addresshRvaeiN, uintLzUzcub, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100x9RcWRf = await Token50X100.new({from: accounts[3]});
		const uintFMFOdSJ = BigInt("313")
		const addressvsKclXb = accounts[2]
		const boolaWM3QT = await Token50X100x9RcWRf.decreaseApproval.call(addressvsKclXb, uintFMFOdSJ, {from: accounts[1]});
		const uint256oIOUzXZ = await Token50X100x9RcWRf.totalSupply.call({from: accounts[1]});

		assert.equal(boolaWM3QT, true)
		assert.equal(uint256oIOUzXZ, BigInt("4714285714285710"))
	});

	it('test for Token50X100', async () => {
		const Token50X100E3FAB4L = await Token50X100.new({from: accounts[4]});
		const uintwPA1TZ3 = BigInt("834")
		const uinttleHxzt = BigInt("1175")
		const addressRLVwiyn = accounts[4]
		const uintF25TAgX = BigInt("1187")
		const uint2zGtqW = BigInt("1365")
		const addresshOzVWG = accounts[1]
		const addressM8TC5uh = accounts[4]
		const uintJm7CTNA = BigInt("191")
		const stringtDpuR9V = "E"
		const stringfYCG2eQ = "DMs1xqLJ2UmdCBoP8iDfpNM3DQJ"
		const boolVZIdI5j = await Token50X100E3FAB4L.setVesting.call(addressRLVwiyn, uinttleHxzt, uintwPA1TZ3, {from: accounts[4]});
//		await Token50X100E3FAB4L.release.call({from: accounts[0]});
//		const boolLYoRLL = await Token50X100E3FAB4L._transfer.call(addressM8TC5uh, addresshOzVWG, uint2zGtqW, uintF25TAgX, {from: accounts[4]});
//		const booljEoQX6V = await Token50X100E3FAB4L.setSymbolNameDecimals.call(stringfYCG2eQ, stringtDpuR9V, uintJm7CTNA, {from: accounts[0]});

		assert.equal(boolVZIdI5j, true)
		await expect(Token50X100E3FAB4L.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HgWIJmY = await Token50X100.new({from: accounts[0]});
		const uinthSx3hW7 = BigInt("1736")
		const addressMAMICMb = accounts[2]
		const uintYJwPdB = BigInt("2028")
		const uintM7ntTys = BigInt("207")
		const addressQkrqub7 = accounts[2]
		const addressDPc7c6t = accounts[1]
		const addressSlo4PZu = accounts[4]
		const uintErFLHFK = BigInt("1668")
		const addressYAx9MZU = accounts[0]
		const uintaEyY02F = BigInt("1989")
		const addresscIGiYga = accounts[5]
		const boolZJP5FUa = false
		const addresscFX9ura = accounts[1]
		const uint256Io2ecxT = await Token50X100HgWIJmY.totalSupply.call({from: accounts[4]});
		const boolcjMnfBx = await Token50X100HgWIJmY.increaseApproval.call(addressMAMICMb, uinthSx3hW7, {from: accounts[0]});
		const boolxwYuPfE = await Token50X100HgWIJmY.setMaxLockPeriod.call(uintYJwPdB, {from: accounts[4]});
		const boolsqTB3xP = await Token50X100HgWIJmY.decreaseApproval.call(addressQkrqub7, uintM7ntTys, {from: accounts[2]});
		const uint256E1hYjf1 = await Token50X100HgWIJmY.allowance.call(addressSlo4PZu, addressDPc7c6t, {from: accounts[3]});
//		await Token50X100HgWIJmY.onlyOwner.call({from: accounts[5]});
//		const boolDHMKGYP = await Token50X100HgWIJmY.transfer.call(addressYAx9MZU, uintErFLHFK, {from: accounts[4]});
//		const boolHcDPb8 = await Token50X100HgWIJmY.transfer.call(addresscIGiYga, uintaEyY02F, {from: accounts[1]});
//		await Token50X100HgWIJmY.setWhiteListReceivers.call(addresscFX9ura, boolZJP5FUa, {from: accounts[0]});

		assert.equal(boolcjMnfBx, true)
		assert.equal(boolsqTB3xP, true)
		assert.equal(boolxwYuPfE, false)
		assert.equal(uint256E1hYjf1, BigInt("0"))
		assert.equal(uint256Io2ecxT, BigInt("4714285714285710"))
		await expect(Token50X100HgWIJmY.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HgWIJmY = await Token50X100.new({from: accounts[0]});
		const uint6eNfLa = BigInt("2081")
		const address5ucr5S = accounts[4]
		const uintksPYiha = BigInt("199")
		const addressXbdrQxK = accounts[2]
		const addressj0x46sk = accounts[1]
		const addressYLDwVk = accounts[5]
		const uintRPlmJss = BigInt("1668")
		const addressWq4N2Ee = accounts[0]
		const uintFAwvwK8 = BigInt("1994")
		const addressOeZHUFi = accounts[5]
		const boolZJP5FUa = false
		const addressh7pS6W = accounts[1]
		const uint256Io2ecxT = await Token50X100HgWIJmY.totalSupply.call({from: accounts[4]});
		const boolxwYuPfE = await Token50X100HgWIJmY.setMaxLockPeriod.call(uint6eNfLa, {from: accounts[4]});
		const addresszxarVDB = await Token50X100HgWIJmY.transferOwnership.call(address5ucr5S, {from: accounts[0]});
		const boolsqTB3xP = await Token50X100HgWIJmY.decreaseApproval.call(addressXbdrQxK, uintksPYiha, {from: accounts[2]});
		const uint256E1hYjf1 = await Token50X100HgWIJmY.allowance.call(addressYLDwVk, addressj0x46sk, {from: accounts[3]});
//		const boolDHMKGYP = await Token50X100HgWIJmY.transfer.call(addressWq4N2Ee, uintRPlmJss, {from: accounts[4]});
//		const boolHcDPb8 = await Token50X100HgWIJmY.transfer.call(addressOeZHUFi, uintFAwvwK8, {from: accounts[1]});
//		await Token50X100HgWIJmY.setWhiteListReceivers.call(addressh7pS6W, boolZJP5FUa, {from: accounts[0]});

		assert.equal(boolsqTB3xP, true)
		assert.equal(boolxwYuPfE, false)
		assert.equal(uint256E1hYjf1, BigInt("0"))
		assert.equal(uint256Io2ecxT, BigInt("4714285714285710"))
		await expect(Token50X100HgWIJmY.transfer.call(addressWq4N2Ee, uintRPlmJss, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PkpNsVu = await Token50X100.new({from: accounts[1]});
		const uintGURhijV = BigInt("1931")
		const uintyOEWSwT = BigInt("1785")
		const addressLvbwJeo = "0x0000000000000000000000000000000000000001"
//		await Token50X100PkpNsVu.release.call({from: accounts[1]});
//		const boolGF2Oee = await Token50X100PkpNsVu.setVesting.call(addressLvbwJeo, uintyOEWSwT, uintGURhijV, {from: accounts[0]});

		await expect(Token50X100PkpNsVu.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Eh9p8lb = await Token50X100.new({from: accounts[1]});
		const addressP8H4DIq = accounts[3]
		const addressUKsEinT = accounts[3]
		const uintHsaFCuD = BigInt("1792")
		const addressuRgp9Xz = accounts[7]
		const addresslDMsKph = accounts[0]
		const uint256A6MvMr = await Token50X100Eh9p8lb.balanceOf.call(addressP8H4DIq, {from: accounts[1]});
//		const addressAKGhWK8 = await Token50X100Eh9p8lb.transferOwnership.call(addressUKsEinT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaU8rzem = await Token50X100Eh9p8lb.transfer.call(addressuRgp9Xz, uintHsaFCuD, {from: accounts[1]});
//		const uint256qhCqlm2 = await Token50X100Eh9p8lb.balanceOf.call(addresslDMsKph, {from: accounts[2]});

		assert.equal(uint256A6MvMr, BigInt("0"))
		await expect(Token50X100Eh9p8lb.transferOwnership.call(addressUKsEinT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HgWIJmY = await Token50X100.new({from: accounts[0]});
		const uintbgcOm3 = BigInt("243")
		const addresskuNH9JV = accounts[4]
		const uintIPJDf6H = BigInt("1326")
		const uintQOdXrD4 = BigInt("37")
		const addressgv6r7pR = accounts[2]
		const uintL7Gb3Rm = BigInt("1992")
		const uintjX0szga = BigInt("682")
		const uintD797qeb = BigInt("1060")
		const addressiDYVyeZ = accounts[2]
		const boolsqTB3xP = await Token50X100HgWIJmY.decreaseApproval.call(addresskuNH9JV, uintbgcOm3, {from: accounts[2]});
//		await Token50X100HgWIJmY.lock.call({from: accounts[0]});
//		const boolnIMC7AS = await Token50X100HgWIJmY.setVesting.call(addressgv6r7pR, uintQOdXrD4, uintIPJDf6H, {from: accounts[4]});
//		const boolSRiSMq = await Token50X100HgWIJmY.safeLock.call(uintjX0szga, uintL7Gb3Rm, {from: accounts[0]});
//		const boolyhSEIC1 = await Token50X100HgWIJmY.transfer.call(addressiDYVyeZ, uintD797qeb, {from: accounts[4]});

		assert.equal(boolsqTB3xP, true)
		await expect(Token50X100HgWIJmY.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})