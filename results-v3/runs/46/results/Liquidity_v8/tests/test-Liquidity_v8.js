const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringhjYErwA = "Tng6ZJdn5KCl9qnc1pRszpQcSj3nN1M8zfaOGwylhVnk5liye6nUfSFlN1EFq86jFSb"
		const addressrL44PPV = "0x0000000000000000000000000000000000000001"
		const address1z9drG = accounts[1]
		const uint9hQ3OA = BigInt("1983")
		const uintbGsWG9Q = BigInt("1044")
		const Liquidity_v8J6owtRU = await Liquidity_v8.new(stringhjYErwA, addressrL44PPV, address1z9drG, uint9hQ3OA, uintbGsWG9Q, {from: accounts[5]});
		const addressZLCLb2s = accounts[5]
		const uint256TAehlCW = await Liquidity_v8J6owtRU.calculate.call(addressZLCLb2s, {from: accounts[1]});
		await Liquidity_v8J6owtRU.renounceOwnership.call({from: accounts[2]});
		const boolYa4np05 = await Liquidity_v8J6owtRU.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringUNHeOYl = "sqNptAG2wun2elsuFanIbHFwMxntjHZ6NcsZFDWDtpSc7VnJGN4USkUJT6xP3cGubIKM4r6v4p"
		const addressahYqSKR = accounts[0]
		const addressgwhn9I = accounts[4]
		const uintFSBAkz8 = BigInt("1663")
		const uintrsRWCGD = BigInt("470")
		const Liquidity_v8t7jDgb = await Liquidity_v8.new(stringUNHeOYl, addressahYqSKR, addressgwhn9I, uintFSBAkz8, uintrsRWCGD, {from: accounts[3]});
		const addressKWrFtQK = accounts[4]
		const uintaHwFq9L = BigInt("386")
		const addressNdzoGx6 = accounts[3]
		const uintyiLrL56 = BigInt("1298")
		const addresszvSSFmP = accounts[0]
		const uint256l3ucWor = await Liquidity_v8t7jDgb.calculate.call(addressKWrFtQK, {from: accounts[4]});
		const boolh0B4Z1N = await Liquidity_v8t7jDgb.addReward.call(uintaHwFq9L, {from: accounts[3]});
		const 
CVzFvfw = await Liquidity_v8t7jDgb._hasAllowance.call(addresszvSSFmP, uintyiLrL56, addressNdzoGx6, {from: accounts[5]});
		const boolsJrLxdt = await Liquidity_v8t7jDgb.isOwner.call({from: accounts[3]});
		const boolXpOH7tM = await Liquidity_v8t7jDgb.withdraw.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringh0dAuum = "FlmzQvAplQvAugV3xari2GLNjeG"
		const addresscnCjodm = accounts[0]
		const addressrZa7hLQ = accounts[4]
		const uint3QJ4pL = BigInt("1274")
		const uintJaNWPIR = BigInt("1502")
		const Liquidity_v8B9X3z15 = await Liquidity_v8.new(stringh0dAuum, addresscnCjodm, addressrZa7hLQ, uint3QJ4pL, uintJaNWPIR, {from: accounts[1]});
		const addressV8o3foc = accounts[2]
		const uintybsoOff = BigInt("645")
		const addressLPIpPUk = accounts[3]
		const addressV4ybnY5 = await Liquidity_v8B9X3z15.owner.call({from: accounts[0]});
		const 
fMjJB6a = await Liquidity_v8B9X3z15._hasAllowance.call(addressLPIpPUk, uintybsoOff, addressV8o3foc, {from: accounts[4]});
		const boolys6uaOm = await Liquidity_v8B9X3z15.isOwner.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIH613Xk = "XYZhVLrro4tH8LG"
		const addressDe3Hm7S = accounts[3]
		const addressehC6nT4 = accounts[0]
		const uinta7H28I = BigInt("1391")
		const uintpbnE9di = BigInt("1633")
		const Liquidity_v8PxhijWn = await Liquidity_v8.new(stringIH613Xk, addressDe3Hm7S, addressehC6nT4, uinta7H28I, uintpbnE9di, {from: accounts[1]});
		const addressxDj5b22 = accounts[2]
		const addressBPKpvNg = "0x0000000000000000000000000000000000000001"
		const uintluvcDL5 = BigInt("571")
		const boolpkWme6X = await Liquidity_v8PxhijWn.withdraw.call({from: accounts[2]});
		const 
SrW3Lof = await Liquidity_v8PxhijWn.userDeposits.call(addressxDj5b22, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QWbYs18 = await Liquidity_v8PxhijWn.calculate.call(addressBPKpvNg, {from: accounts[0]});
		const uint64LOvGzaH = await Liquidity_v8PxhijWn.setRate.call(uintluvcDL5, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIaTGN2r = "mlPKrkB"
		const addresswUfiyNl = accounts[0]
		const addresswvB1KY = accounts[0]
		const uintWBYjaq = BigInt("559")
		const uintjGtFU17 = BigInt("1597")
		const Liquidity_v8VR9pjDE = await Liquidity_v8.new(stringIaTGN2r, addresswUfiyNl, addresswvB1KY, uintWBYjaq, uintjGtFU17, {from: "0x0000000000000000000000000000000000000001"});
		const uintbxsz0dU = BigInt("428")
		const uintd6GVIgH = BigInt("55")
		const addressVBWaWTy = accounts[4]
		const boolJX7QVov = await Liquidity_v8VR9pjDE.emergencyWithdraw.call({from: accounts[0]});
		const boolg6roYI5 = await Liquidity_v8VR9pjDE.isOwner.call({from: accounts[1]});
		const uint64zzH3tLJ = await Liquidity_v8VR9pjDE.setRate.call(uintbxsz0dU, {from: accounts[2]});
		const addressRjOK52q = await Liquidity_v8VR9pjDE.owner.call({from: accounts[3]});
		const boolwTjOoUl = await Liquidity_v8VR9pjDE.addReward.call(uintd6GVIgH, {from: accounts[4]});
		const addresska4Ho74 = await Liquidity_v8VR9pjDE.transferOwnership.call(addressVBWaWTy, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringR7EFUnY = "NrLAzsEbmaobrs0lGqrvwHcom998wE9xuF9ydeVP"
		const addresskuO8W9g = accounts[1]
		const addressqhBPZJj = accounts[1]
		const uintUGYmID2 = BigInt("962")
		const uintdAqm3p = BigInt("0")
		const Liquidity_v8AzEf06f = await Liquidity_v8.new(stringR7EFUnY, addresskuO8W9g, addressqhBPZJj, uintUGYmID2, uintdAqm3p, {from: accounts[5]});
		const bools6vswwV = await Liquidity_v8AzEf06f.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8AzEf06f.onlyOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const string81a71Y = "ERWqN9Spk7v1GdgFXutR3wnzXHM83mjz2ue1ry7J"
		const addressmDsVgpQ = accounts[4]
		const addressrtfASGF = accounts[2]
		const uintEfWGepP = BigInt("1222")
		const uint45Av7F = BigInt("1584")
		const Liquidity_v8AIgPky7 = await Liquidity_v8.new(string81a71Y, addressmDsVgpQ, addressrtfASGF, uintEfWGepP, uint45Av7F, {from: accounts[4]});
		const addressJ2en99V = accounts[0]
		const 
kPcKWx = await Liquidity_v8AIgPky7.userDeposits.call(addressJ2en99V, {from: accounts[1]});
		const boolAWWjdrZ = await Liquidity_v8AIgPky7.withdraw.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const string81a71Y = "ERWqN9Spk7v1GdgFXutR3wnzXHM83mjz2ue1ry7J"
		const addressZ2q8xGz = accounts[4]
		const addressrrgqFwo = accounts[2]
		const uintsFSITxw = BigInt("1222")
		const uintxdpcb9l = BigInt("1584")
		const Liquidity_v8AIgPky7 = await Liquidity_v8.new(string81a71Y, addressZ2q8xGz, addressrrgqFwo, uintsFSITxw, uintxdpcb9l, {from: accounts[4]});
		const addressejxRaK5 = accounts[1]
		const addressgeOBSH = accounts[3]
		const uintRvkfeC = BigInt("1672")
		const 
kPcKWx = await Liquidity_v8AIgPky7.userDeposits.call(addressejxRaK5, {from: accounts[1]});
		const uint2569ZdSvW = await Liquidity_v8AIgPky7.calculate.call(addressgeOBSH, {from: accounts[1]});
		const uint256E34x0y0 = await Liquidity_v8AIgPky7.changeLockDuration.call(uintRvkfeC, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const string81a71Y = "ERWqN9Spk7v1GdgFXutR3wnzXHM83mjz2ue1ry7J"
		const addressBqfnNf = accounts[4]
		const addresslVapkd = accounts[2]
		const uintRXYOcJ = BigInt("1222")
		const uintyhVVwzw = BigInt("1584")
		const Liquidity_v8AIgPky7 = await Liquidity_v8.new(string81a71Y, addressBqfnNf, addresslVapkd, uintRXYOcJ, uintyhVVwzw, {from: accounts[4]});
		const addressyCVPzA6 = accounts[3]
		await Liquidity_v8AIgPky7.renounceOwnership.call({from: accounts[4]});
		const 
kPcKWx = await Liquidity_v8AIgPky7.userDeposits.call(addressyCVPzA6, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const string81a71Y = "ERWqN9Spk7v1GdgFXutR3wnzXHM83mjz2ue1ry7J"
		const addressbJt9U3n = accounts[4]
		const addressTYn6Cbs = accounts[2]
		const uintDKSvwf0 = BigInt("1222")
		const uinteneCXN = BigInt("1584")
		const Liquidity_v8AIgPky7 = await Liquidity_v8.new(string81a71Y, addressbJt9U3n, addressTYn6Cbs, uintDKSvwf0, uinteneCXN, {from: accounts[4]});
		const addresskzTAT2r = accounts[1]
		const address9DsozV = accounts[5]
		const 
kPcKWx = await Liquidity_v8AIgPky7.userDeposits.call(addresskzTAT2r, {from: accounts[1]});
		const addresshEFx7FD = await Liquidity_v8AIgPky7.transferOwnership.call(address9DsozV, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const string81a71Y = "ERWqN9Spk7v1GdgFXutR3wnzXHM83mjz2ue1ry7J"
		const addressUYj8Qla = accounts[4]
		const addressJXNWbM3 = accounts[2]
		const uintQ8FCZET = BigInt("1222")
		const uintmvuEQ7K = BigInt("1584")
		const Liquidity_v8AIgPky7 = await Liquidity_v8.new(string81a71Y, addressUYj8Qla, addressJXNWbM3, uintQ8FCZET, uintmvuEQ7K, {from: accounts[4]});
		const uintWqQ1gI1 = BigInt("199")
		const addressazltEd1 = accounts[5]
		const addressf1fVXZe = accounts[5]
		const uint6455m0yO = await Liquidity_v8AIgPky7.setRate.call(uintWqQ1gI1, {from: accounts[4]});
		const 
JBI3hok = await Liquidity_v8AIgPky7.userDeposits.call(addressazltEd1, {from: accounts[0]});
		const 
kPcKWx = await Liquidity_v8AIgPky7.userDeposits.call(addressf1fVXZe, {from: accounts[1]});
	});
})