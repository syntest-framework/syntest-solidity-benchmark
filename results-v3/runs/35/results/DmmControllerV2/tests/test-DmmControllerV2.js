const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2jVL4741 = await DmmControllerV2.new({from: accounts[0]});
		const uinttfQk0QW = BigInt("1774")
		const addressgfrbcXV = accounts[3]
		const addressBqWJQH = accounts[2]
		const addressgN5AWcp = accounts[5]
		const uintGNNAX1Z = await DmmControllerV2jVL4741.requireIsSecondaryMarketNft.call(uinttfQk0QW, {from: accounts[5]});
		const uintCMJmjoP = await DmmControllerV2jVL4741.getInterestRateByDmmTokenAddress.call(addressgfrbcXV, {from: accounts[4]});
		const 
LjuPQu8 = await DmmControllerV2jVL4741.initialize.call(addressgN5AWcp, addressBqWJQH, {from: accounts[1]});
		await DmmControllerV2jVL4741.pause.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressGUKw0C0 = accounts[0]
		const addressSmZ85f5 = accounts[3]
		const addressdRlAig = accounts[3]
		const addressQGuPMuz = accounts[4]
		const addressXHSov4s = accounts[1]
		const addressgJ4Nij = accounts[4]
		const addressEPvTIEA = accounts[1]
		const addressdXfirI1 = accounts[4]
		const addressmferuZC = accounts[0]
		const uintNpaLQFO = BigInt("2015")
		const uintpuMlICY = BigInt("1484")
		const addressRw1E6j = accounts[1]
		const DmmControllerV2eakAG08 = await DmmControllerV2.new(addressGUKw0C0, addressSmZ85f5, addressdRlAig, addressQGuPMuz, addressXHSov4s, addressgJ4Nij, addressEPvTIEA, addressdXfirI1, addressmferuZC, uintNpaLQFO, uintpuMlICY, addressRw1E6j, {from: accounts[3]});
		const uintC7xJYRp = BigInt("1171")
		const uintTuU5bq9 = BigInt("317")
		const uintt88f2kp = BigInt("1691")
		const addressgvls4Jp = accounts[3]
		const uintZ7LuEnw = await DmmControllerV2eakAG08.requireTokenExists.call(uintC7xJYRp, {from: accounts[1]});
		const uintPvhFSt = await DmmControllerV2eakAG08.requireTokenExists.call(uintTuU5bq9, {from: accounts[0]});
		const addressCPEscPY = await DmmControllerV2eakAG08.getDmmTokenAddressByDmmTokenId.call(uintt88f2kp, {from: accounts[5]});
		const addressK1TrGDd = await DmmControllerV2eakAG08.checkNotBlacklisted.call(addressgvls4Jp, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressUkHos91 = accounts[1]
		const addressaCfwMKV = accounts[1]
		const addressojsf49w = accounts[2]
		const addressLwt5QEQ = accounts[1]
		const addresszs04cYC = "0x0000000000000000000000000000000000000001"
		const addressUb5RjML = "0x0000000000000000000000000000000000000001"
		const addressayqXSTr = accounts[4]
		const addressPmWGv7D = accounts[1]
		const addressbqOMX88 = accounts[2]
		const uintlFBeOJ = BigInt("1585")
		const uintMzjY4k6 = BigInt("581")
		const addressObIOtuS = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2ycfiVDT = await DmmControllerV2.new(addressUkHos91, addressaCfwMKV, addressojsf49w, addressLwt5QEQ, addresszs04cYC, addressUb5RjML, addressayqXSTr, addressPmWGv7D, addressbqOMX88, uintlFBeOJ, uintMzjY4k6, addressObIOtuS, {from: accounts[1]});
		const uintnFNUyI0 = BigInt("947")
		const boolmjdyewt = await DmmControllerV2ycfiVDT.isOwner.call({from: accounts[4]});
		const uintiQvCVOW = await DmmControllerV2ycfiVDT.disableMarket.call(uintnFNUyI0, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressTsoKQe4 = accounts[0]
		const addressEKUoCgc = accounts[3]
		const addressu4Ii76Z = accounts[3]
		const addressIrP3w5g = accounts[4]
		const addressJRNDk9A = accounts[1]
		const addressKdy0xzg = accounts[4]
		const addressG0UOPMA = accounts[1]
		const addressYiPpKI = accounts[4]
		const addresslsaxKQ5 = accounts[0]
		const uintSKuMFJ9 = BigInt("2015")
		const uintsxhUCPC = BigInt("1484")
		const addressySojBQN = accounts[1]
		const DmmControllerV2eakAG08 = await DmmControllerV2.new(addressTsoKQe4, addressEKUoCgc, addressu4Ii76Z, addressIrP3w5g, addressJRNDk9A, addressKdy0xzg, addressG0UOPMA, addressYiPpKI, addresslsaxKQ5, uintSKuMFJ9, uintsxhUCPC, addressySojBQN, {from: accounts[3]});
		const uintedzis77 = BigInt("1171")
		const uintioGTShI = BigInt("1975")
		const uintHxna1EA = BigInt("1691")
		const addressjs3v1VY = accounts[2]
		const addresswSj31HD = accounts[3]
		await DmmControllerV2eakAG08.renouncePauser.call({from: accounts[2]});
		const uintZ7LuEnw = await DmmControllerV2eakAG08.requireTokenExists.call(uintedzis77, {from: accounts[1]});
		const uintPvhFSt = await DmmControllerV2eakAG08.requireTokenExists.call(uintioGTShI, {from: accounts[0]});
		const addressCPEscPY = await DmmControllerV2eakAG08.getDmmTokenAddressByDmmTokenId.call(uintHxna1EA, {from: accounts[5]});
		const addressxPadqPe = await DmmControllerV2eakAG08.addPauser.call(addressjs3v1VY, {from: accounts[3]});
		const addressK1TrGDd = await DmmControllerV2eakAG08.checkNotBlacklisted.call(addresswSj31HD, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addresspsaMCub = accounts[1]
		const addressbUynhKU = accounts[1]
		const address5bejn0 = accounts[2]
		const addressuEgZLxY = accounts[1]
		const addressDXxgtgj = "0x0000000000000000000000000000000000000001"
		const address7A9oW5 = "0x0000000000000000000000000000000000000001"
		const addresssFkamFJ = accounts[4]
		const addressPttDWB = accounts[1]
		const addressEX6GHW1 = accounts[2]
		const uintrK5vIGG = BigInt("1585")
		const uint66axNq = BigInt("581")
		const addressaKIa8HM = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2ycfiVDT = await DmmControllerV2.new(addresspsaMCub, addressbUynhKU, address5bejn0, addressuEgZLxY, addressDXxgtgj, address7A9oW5, addresssFkamFJ, addressPttDWB, addressEX6GHW1, uintrK5vIGG, uint66axNq, addressaKIa8HM, {from: accounts[1]});
		const addresszNtXXQm = accounts[0]
		const uintdE6aIVd = await DmmControllerV2ycfiVDT.getInterestRateByDmmTokenAddress.call(addresszNtXXQm, {from: accounts[3]});
		const boolmjdyewt = await DmmControllerV2ycfiVDT.isOwner.call({from: accounts[4]});
		await DmmControllerV2ycfiVDT.whenNotPaused.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressFxjksjS = accounts[5]
		const addresssrYY6lx = accounts[1]
		const addresshtOBKD2 = accounts[2]
		const addressX5NpHpy = accounts[2]
		const addressFno1ya = accounts[0]
		const addressEkurBO8 = accounts[2]
		const addresse0BG1Ik = accounts[1]
		const addressbagiA4Y = accounts[1]
		const addresseforRDP = accounts[1]
		const uintG3752oN = BigInt("1844")
		const uintrinIpFM = BigInt("1405")
		const addressiOIiqW6 = accounts[5]
		const DmmControllerV2aqShNWp = await DmmControllerV2.new(addressFxjksjS, addresssrYY6lx, addresshtOBKD2, addressX5NpHpy, addressFno1ya, addressEkurBO8, addresse0BG1Ik, addressbagiA4Y, addresseforRDP, uintG3752oN, uintrinIpFM, addressiOIiqW6, {from: accounts[5]});
		const addresst6x6eb8 = accounts[3]
		const 
Q4T1zRG = await DmmControllerV2aqShNWp.setCollateralizationCalculator.call(addresst6x6eb8, {from: accounts[1]});
		const boolXtf3iSh = await DmmControllerV2aqShNWp.isOwner.call({from: accounts[1]});
		await DmmControllerV2aqShNWp.initializer.call({from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const address0VpQ1H = accounts[1]
		const addressBbf2fKx = accounts[1]
		const addressTJzzKHk = accounts[2]
		const addressP2ZwTRc = accounts[1]
		const addressDQXaTr = "0x0000000000000000000000000000000000000001"
		const addressxqUIKt = "0x0000000000000000000000000000000000000001"
		const addresscKix7c5 = accounts[4]
		const addressAbylfD = accounts[1]
		const addressIBMlJGr = accounts[2]
		const uintexkX6up = BigInt("1585")
		const uintAgZ4Wqj = BigInt("581")
		const addressy0Wio9a = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2ycfiVDT = await DmmControllerV2.new(address0VpQ1H, addressBbf2fKx, addressTJzzKHk, addressP2ZwTRc, addressDQXaTr, addressxqUIKt, addresscKix7c5, addressAbylfD, addressIBMlJGr, uintexkX6up, uintAgZ4Wqj, addressy0Wio9a, {from: accounts[1]});
		const addressf6ATuV = accounts[2]
		const uintKbc1vIb = BigInt("947")
		const boolmjdyewt = await DmmControllerV2ycfiVDT.isOwner.call({from: accounts[4]});
		const addressVMTyXiZ = await DmmControllerV2ycfiVDT.setOffChainCurrencyValuator.call(addressf6ATuV, {from: accounts[1]});
		await DmmControllerV2ycfiVDT.whenPaused.call({from: accounts[5]});
		const uintiQvCVOW = await DmmControllerV2ycfiVDT.disableMarket.call(uintKbc1vIb, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressJ2JyPCa = accounts[4]
		const addressGsY1RlD = accounts[4]
		const addressSxkrUe3 = accounts[4]
		const addressT2PAV4d = accounts[3]
		const addressHvfhDSQ = accounts[1]
		const addressozrCW2p = accounts[4]
		const addressigdoQGp = accounts[5]
		const addresspmsOHIu = accounts[4]
		const address5wqLiO = accounts[2]
		const uintlL7grLj = BigInt("840")
		const uintp25MOND = BigInt("503")
		const addressqh4ye1j = accounts[1]
		const DmmControllerV2yM4JL5 = await DmmControllerV2.new(addressJ2JyPCa, addressGsY1RlD, addressSxkrUe3, addressT2PAV4d, addressHvfhDSQ, addressozrCW2p, addressigdoQGp, addresspmsOHIu, address5wqLiO, uintlL7grLj, uintp25MOND, addressqh4ye1j, {from: "0x0000000000000000000000000000000000000001"});
		const address5ueZqg = accounts[1]
		const addressNclXnQy = accounts[4]
		const addressnFKIymn = accounts[0]
		const addresseimBLYr = accounts[0]
		const addressyvvvSnC = accounts[4]
		const addressG0aabep = accounts[2]
		const addressEjlgfOO = await DmmControllerV2yM4JL5.setOffChainCurrencyValuator.call(address5ueZqg, {from: accounts[3]});
		const 
QzvOvcb = await DmmControllerV2yM4JL5.addMarketFromExistingDmmToken.call(addressnFKIymn, addressNclXnQy, {from: accounts[4]});
		const 
h4RsPP5 = await DmmControllerV2yM4JL5.transferOwnershipToNewController.call(addresseimBLYr, {from: accounts[0]});
		const 
lW9YXE0 = await DmmControllerV2yM4JL5.addMarketFromExistingDmmToken.call(addressG0aabep, addressyvvvSnC, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressl5Iy2bq = accounts[2]
		const addressH2dcH0e = accounts[5]
		const addressWn5v4GP = accounts[1]
		const addresscMDweA0 = accounts[3]
		const addressk8gfCS = accounts[1]
		const address7zKbqq = accounts[0]
		const addressUt8TBYc = accounts[3]
		const addressYJiYjEe = accounts[1]
		const addressbvvpM2V = accounts[5]
		const uintyfX1wpX = BigInt("1070")
		const uintdcf7qDp = BigInt("106")
		const addressNpvE6pS = accounts[0]
		const DmmControllerV2Ho8LCxX = await DmmControllerV2.new(addressl5Iy2bq, addressH2dcH0e, addressWn5v4GP, addresscMDweA0, addressk8gfCS, address7zKbqq, addressUt8TBYc, addressYJiYjEe, addressbvvpM2V, uintyfX1wpX, uintdcf7qDp, addressNpvE6pS, {from: accounts[3]});
		const addressgTUbH8z = accounts[2]
		const addressiYLQeTa = accounts[0]
		const uintv5ZEdzc = BigInt("601")
		const uintndw07tu = BigInt("360")
		const addressaPhPPbE = accounts[4]
		const addresshMKV9j9 = await DmmControllerV2Ho8LCxX.setDmmTokenFactory.call(addressgTUbH8z, {from: accounts[3]});
		const addressu0Fm7a = await DmmControllerV2Ho8LCxX.setOffChainCurrencyValuator.call(addressiYLQeTa, {from: accounts[4]});
		const uintCL5udCJ = await DmmControllerV2Ho8LCxX.getActiveCollateralization.call({from: accounts[4]});
		const 
j7U2HJN = await DmmControllerV2Ho8LCxX.adminDepositFunds.call(uintndw07tu, uintv5ZEdzc, {from: accounts[2]});
		const addressYhnDvI = await DmmControllerV2Ho8LCxX.unBlacklist.call(addressaPhPPbE, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressZZh2YKI = accounts[0]
		const addresszHYwQwh = accounts[3]
		const addressd2J3bLR = accounts[3]
		const addressa4Jfbsw = accounts[4]
		const addressknhxLS7 = accounts[1]
		const addresshM7AExw = accounts[4]
		const addressMBIIzrV = accounts[1]
		const addressXZ2kgqt = accounts[4]
		const addressgkprpPm = accounts[0]
		const uintEuJXXR5 = BigInt("2015")
		const uintLlPUrkM = BigInt("1484")
		const addressQVeb4m0 = accounts[1]
		const DmmControllerV2eakAG08 = await DmmControllerV2.new(addressZZh2YKI, addresszHYwQwh, addressd2J3bLR, addressa4Jfbsw, addressknhxLS7, addresshM7AExw, addressMBIIzrV, addressXZ2kgqt, addressgkprpPm, uintEuJXXR5, uintLlPUrkM, addressQVeb4m0, {from: accounts[3]});
		const uinta1FZ8U = BigInt("1171")
		const uintyFGOGZm = BigInt("317")
		const uintdvmvlds = BigInt("1688")
		const addressSCV8850 = accounts[3]
		const uinttpRlzln = await DmmControllerV2eakAG08.getTotalCollateralization.call({from: accounts[5]});
		const uintZ7LuEnw = await DmmControllerV2eakAG08.requireTokenExists.call(uinta1FZ8U, {from: accounts[1]});
		const uintPvhFSt = await DmmControllerV2eakAG08.requireTokenExists.call(uintyFGOGZm, {from: accounts[0]});
		const addressCPEscPY = await DmmControllerV2eakAG08.getDmmTokenAddressByDmmTokenId.call(uintdvmvlds, {from: accounts[5]});
		const addressK1TrGDd = await DmmControllerV2eakAG08.checkNotBlacklisted.call(addressSCV8850, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressufVJLTa = accounts[0]
		const addressGZvyiL = accounts[3]
		const addressMcSWekk = accounts[3]
		const addressXpDx3yj = accounts[4]
		const addressRZbaFVS = accounts[1]
		const addresstXagPDN = accounts[4]
		const addressqL210lY = accounts[1]
		const addresswjQtR7H = accounts[4]
		const addressdzPkIgm = accounts[0]
		const uintmW5aBjB = BigInt("2015")
		const uintUNdls3b = BigInt("1484")
		const addressE7kk1Av = accounts[1]
		const DmmControllerV2eakAG08 = await DmmControllerV2.new(addressufVJLTa, addressGZvyiL, addressMcSWekk, addressXpDx3yj, addressRZbaFVS, addresstXagPDN, addressqL210lY, addresswjQtR7H, addressdzPkIgm, uintmW5aBjB, uintUNdls3b, addressE7kk1Av, {from: accounts[3]});
		const addressW1iKDf5 = accounts[3]
		const uintNwgwTDv = BigInt("1171")
		const uintbr4PWfs = BigInt("317")
		const uintG1INHVt = BigInt("1691")
		const addressfPeoUl5 = accounts[4]
		const addressWltqSCE = await DmmControllerV2eakAG08.addPauser.call(addressW1iKDf5, {from: accounts[4]});
		const uintZ7LuEnw = await DmmControllerV2eakAG08.requireTokenExists.call(uintNwgwTDv, {from: accounts[1]});
		await DmmControllerV2eakAG08.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uintPvhFSt = await DmmControllerV2eakAG08.requireTokenExists.call(uintbr4PWfs, {from: accounts[0]});
		const addressCPEscPY = await DmmControllerV2eakAG08.getDmmTokenAddressByDmmTokenId.call(uintG1INHVt, {from: accounts[5]});
		const addressK1TrGDd = await DmmControllerV2eakAG08.checkNotBlacklisted.call(addressfPeoUl5, {from: accounts[5]});
	});
})