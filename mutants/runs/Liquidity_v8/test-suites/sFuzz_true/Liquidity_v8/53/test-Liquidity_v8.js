const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringMyhT8H8 = "Ty9jg7SSE7QHk51gw7EBu1QPvkgy3rjE4TJuFRnxxC"
		const addressYeZ3Gjn = accounts[5]
		const addressG44TBJr = accounts[4]
		const uintU3yXSSr = BigInt("274")
		const uintKCahw3c = BigInt("602")
		const Liquidity_v86ibR17 = await Liquidity_v8.new(stringMyhT8H8, addressYeZ3Gjn, addressG44TBJr, uintU3yXSSr, uintKCahw3c, {from: accounts[0]});
		const addressk7AKEZc = accounts[1]
		const 
LIDNSDx = await Liquidity_v86ibR17.userDeposits.call(addressk7AKEZc, {from: accounts[4]});
		await Liquidity_v86ibR17.onlyOwner.call({from: accounts[3]});
		const boolZla7BO2 = await Liquidity_v86ibR17.emergencyWithdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWyTB9sA = "bOrTr7pA5fa7jGhw7oTsqB4Ksfii4AAL0wR3LkhyCNMUQVX3OGlWNcaqzLTrjphDCskHLmoHdxLq3acAGHz"
		const addresst9Gxt7 = accounts[0]
		const addressed701AP = accounts[4]
		const uintnknJQZw = BigInt("1426")
		const uintRoLrCy = BigInt("634")
		const Liquidity_v8wc8maGq = await Liquidity_v8.new(stringWyTB9sA, addresst9Gxt7, addressed701AP, uintnknJQZw, uintRoLrCy, {from: accounts[3]});
		const uintRE0Dhpr = BigInt("282")
		const boolWSmc6bH = await Liquidity_v8wc8maGq.isOwner.call({from: accounts[2]});
		const boolCpBV0WD = await Liquidity_v8wc8maGq.emergencyWithdraw.call({from: accounts[3]});
		const uint64DaCyNYm = await Liquidity_v8wc8maGq.setRate.call(uintRE0Dhpr, {from: accounts[2]});
		const booljAimRfD = await Liquidity_v8wc8maGq.isOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringAOcd9Ki = "554v8id7TTCLO6Ok2gpYCAMQgszRQxjlaa5X556Ozq7pqePoW0cTyFM02A1OtkoQfJAyuM4az32cPU0axk7kkWDXsnHHQ"
		const addressjTUyY4D = accounts[4]
		const addressGlWtOZW = accounts[1]
		const uintYxo0M7w = BigInt("677")
		const uinto3eXBDe = BigInt("383")
		const Liquidity_v8xqg6CJF = await Liquidity_v8.new(stringAOcd9Ki, addressjTUyY4D, addressGlWtOZW, uintYxo0M7w, uinto3eXBDe, {from: "0x0000000000000000000000000000000000000001"});
		const addressNfACdGI = accounts[2]
		const uintr2kqakw = BigInt("1547")
		const addressoPgOhJU = accounts[5]
		const uintewYaQvq = BigInt("868")
		const addressQ1lyW5k = await Liquidity_v8xqg6CJF.transferOwnership.call(addressNfACdGI, {from: accounts[2]});
		const boolWJiCWK7 = await Liquidity_v8xqg6CJF.addReward.call(uintr2kqakw, {from: accounts[4]});
		await Liquidity_v8xqg6CJF.onlyOwner.call({from: accounts[3]});
		const 
JoJFuGu = await Liquidity_v8xqg6CJF.userDeposits.call(addressoPgOhJU, {from: accounts[2]});
		const uint64QQIUDZb = await Liquidity_v8xqg6CJF.setRate.call(uintewYaQvq, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringKuT4Q9z = "NzNv5j8W1Mr7KObYj2rMkB93RraNRjwQjm8Hg7cq4dkDYlq7PEvzR7H45I5Kkawc7da7"
		const addressyNkau4G = accounts[1]
		const addressl7jJ6Do = accounts[4]
		const uintdAPafo = BigInt("1011")
		const uintE7m6k38 = BigInt("1624")
		const Liquidity_v8DFRNRrl = await Liquidity_v8.new(stringKuT4Q9z, addressyNkau4G, addressl7jJ6Do, uintdAPafo, uintE7m6k38, {from: accounts[4]});
		const uintrhjj9Ue = BigInt("1995")
		const addressP0QLk5c = accounts[3]
		const uintDMPsLMr = BigInt("1211")
		const addresstD3nAFe = accounts[3]
		const uint256wxSdfmN = await Liquidity_v8DFRNRrl.changeLockDuration.call(uintrhjj9Ue, {from: accounts[2]});
		const 
KTvFu85 = await Liquidity_v8DFRNRrl.userDeposits.call(addressP0QLk5c, {from: accounts[5]});
		await Liquidity_v8DFRNRrl.renounceOwnership.call({from: accounts[2]});
		const boolPQ0HRjO = await Liquidity_v8DFRNRrl.withdraw.call({from: accounts[1]});
		const uint64cOUURjl = await Liquidity_v8DFRNRrl.setRate.call(uintDMPsLMr, {from: accounts[0]});
		const uint256UxQFjL8 = await Liquidity_v8DFRNRrl.calculate.call(addresstD3nAFe, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringMHv4Avt = "raafieUmEhKlDRdshfYZkhefgBZrKJhSBFgEwHWJR6AHi9J8lBYeh78rCUcvkLSokDMPsc5U1XyMkRRVppIrhtnuALlJ5624"
		const addressDJKbwhu = accounts[3]
		const addressfVI6Uwk = accounts[3]
		const uintJJRvvy = BigInt("300")
		const uintcaQbqZt = BigInt("252")
		const Liquidity_v8cE6XOG0 = await Liquidity_v8.new(stringMHv4Avt, addressDJKbwhu, addressfVI6Uwk, uintJJRvvy, uintcaQbqZt, {from: accounts[1]});
		const bool5ED2UP = await Liquidity_v8cE6XOG0.withdraw.call({from: accounts[2]});
		const boolG13UMrZ = await Liquidity_v8cE6XOG0.isOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringM59N6nF = "qDbZJaIwdhrhTlVOo69z7oHqwzb25YBrwJZFwHJQP83DG5Ml3WDVISFk2V7lncqEmWttENtMqLtKL8Z"
		const addressqfNqhX = "0x0000000000000000000000000000000000000001"
		const addressjKD49bn = accounts[4]
		const uintYotL5Vm = BigInt("1246")
		const uintJH0Z4q = BigInt("2017")
		const Liquidity_v8W8DU3pm = await Liquidity_v8.new(stringM59N6nF, addressqfNqhX, addressjKD49bn, uintYotL5Vm, uintJH0Z4q, {from: accounts[4]});
		const uintdigNZRh = BigInt("2038")
		const uintCaqCTP2 = BigInt("953")
		const boolK5iLeyH = await Liquidity_v8W8DU3pm.isOwner.call({from: accounts[0]});
		const boolvMcC8RX = await Liquidity_v8W8DU3pm.stake.call(uintdigNZRh, {from: accounts[3]});
		const uint64f76oo8Q = await Liquidity_v8W8DU3pm.setRate.call(uintCaqCTP2, {from: accounts[5]});
		const boolWMyBWDs = await Liquidity_v8W8DU3pm.isOwner.call({from: accounts[4]});
		const boolozfVxZ = await Liquidity_v8W8DU3pm.emergencyWithdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringaHRBCNp = "RcnHGVut334yioIomvnBXXnr4bHWeD3"
		const addresseAAjXDf = accounts[2]
		const addressMmFmWRc = accounts[2]
		const uintbJGTMM8 = BigInt("1974")
		const uintJsjRTQ = BigInt("1994")
		const Liquidity_v8wGPzDGh = await Liquidity_v8.new(stringaHRBCNp, addresseAAjXDf, addressMmFmWRc, uintbJGTMM8, uintJsjRTQ, {from: accounts[3]});
		const addressAIEAmb = accounts[2]
		const uintqJJhXE5 = BigInt("800")
		const uint2563N7MSU = await Liquidity_v8wGPzDGh.calculate.call(addressAIEAmb, {from: accounts[3]});
		const addressBQdgQ2i = await Liquidity_v8wGPzDGh.owner.call({from: accounts[2]});
		const boolbb3p3zj = await Liquidity_v8wGPzDGh.emergencyWithdraw.call({from: accounts[4]});
		await Liquidity_v8wGPzDGh.renounceOwnership.call({from: accounts[4]});
		const uint64LEZMiN8 = await Liquidity_v8wGPzDGh.setRate.call(uintqJJhXE5, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringMyhT8H8 = "Ty9jg7SSE7QHk51gw7EBu1QPvkgy3rjE4TJuFRnxxC"
		const addressMqDldm = accounts[5]
		const addresswdexSZo = accounts[4]
		const uintKwcL4Cp = BigInt("274")
		const uintR5Gi1CA = BigInt("602")
		const Liquidity_v86ibR17 = await Liquidity_v8.new(stringMyhT8H8, addressMqDldm, addresswdexSZo, uintKwcL4Cp, uintR5Gi1CA, {from: accounts[0]});
		const addressiCXImVo = accounts[3]
		await Liquidity_v86ibR17.renounceOwnership.call({from: accounts[0]});
		const 
LIDNSDx = await Liquidity_v86ibR17.userDeposits.call(addressiCXImVo, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringMyhT8H8 = "Ty9jg7SSE7QHk51gw7EBu1QPvkgy3rjE4TJuFRnxxC"
		const addressEy2G52A = accounts[5]
		const address10FWPA = accounts[4]
		const uintsSfE2QJ = BigInt("274")
		const uinthmeg7fN = BigInt("602")
		const Liquidity_v86ibR17 = await Liquidity_v8.new(stringMyhT8H8, addressEy2G52A, address10FWPA, uintsSfE2QJ, uinthmeg7fN, {from: accounts[0]});
		const uintZRtp3FE = BigInt("1541")
		const addressQ323NRj = accounts[2]
		const uinty4qqRP3 = BigInt("1232")
		const addressdvlh4VC = "0x0000000000000000000000000000000000000001"
		const addressGBHxsil = accounts[3]
		const addresseLjCk3C = accounts[2]
		const uint64oXFVsds = await Liquidity_v86ibR17.setRate.call(uintZRtp3FE, {from: accounts[0]});
		await Liquidity_v86ibR17.onlyOwner.call({from: accounts[3]});
		const 
bgwZNG2 = await Liquidity_v86ibR17._hasAllowance.call(addressdvlh4VC, uinty4qqRP3, addressQ323NRj, {from: accounts[5]});
		const uint256Gm3wqzs = await Liquidity_v86ibR17.calculate.call(addressGBHxsil, {from: accounts[3]});
		const 
GZPusaY = await Liquidity_v86ibR17.userDeposits.call(addresseLjCk3C, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringiOwSIM5 = "5XvhLtTjkW5bcFKUviwbYNug9nJGbN2HCacY8pVhHcKDxoxJDEBuE1DHKWy3rVctKb6xhf3tFzU49KiFD"
		const addresslzGtEmU = accounts[3]
		const addressxztC9TC = accounts[3]
		const uintH8kZSLM = BigInt("1523")
		const uintPYVRYVc = BigInt("1346")
		const Liquidity_v8DiL2HVj = await Liquidity_v8.new(stringiOwSIM5, addresslzGtEmU, addressxztC9TC, uintH8kZSLM, uintPYVRYVc, {from: accounts[1]});
		const addressxcU2CVT = accounts[5]
		const uinttccg9yD = BigInt("655")
		const boolP3xIYS4 = await Liquidity_v8DiL2HVj.isOwner.call({from: accounts[3]});
		const addressaXiAtde = await Liquidity_v8DiL2HVj.transferOwnership.call(addressxcU2CVT, {from: accounts[1]});
		const booldLNKlTa = await Liquidity_v8DiL2HVj.stake.call(uinttccg9yD, {from: accounts[3]});
		await Liquidity_v8DiL2HVj.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringMyhT8H8 = "Ty9jg7SSE7QHk51gw7EBu1QPvkgy3rjE4TJuFRnxxC"
		const addressmijTX4I = accounts[5]
		const addressijQQw7 = accounts[4]
		const uintlYLuXBF = BigInt("274")
		const uintdXlfoMZ = BigInt("602")
		const Liquidity_v86ibR17 = await Liquidity_v8.new(stringMyhT8H8, addressmijTX4I, addressijQQw7, uintlYLuXBF, uintdXlfoMZ, {from: accounts[0]});
		const addressuOWJ3p = accounts[1]
		const uintUCr4vE9 = BigInt("1013")
		const 
LIDNSDx = await Liquidity_v86ibR17.userDeposits.call(addressuOWJ3p, {from: accounts[4]});
		const uint256kHC7tEW = await Liquidity_v86ibR17.changeLockDuration.call(uintUCr4vE9, {from: accounts[0]});
		const boolbbl5alU = await Liquidity_v86ibR17.emergencyWithdraw.call({from: accounts[1]});
	});
})