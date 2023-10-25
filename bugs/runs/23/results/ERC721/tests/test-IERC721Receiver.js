const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractmBTqbA = await IERC721Receiver.new({from: accounts[4]});
		const datalfSNN6N = "0x18180c04081d080d0119150818031c171d1f1d05050f011e"
		const tokenIdHyrnAkK = BigInt("1383")
		const fromWm4DWWK = "0x0000000000000000000000000000000000000001"
		const operatortD7P1pq = accounts[0]
		const dataqFiRHU7 = "0x0701191818150b120209171a051d1d1c171a"
		const tokenIdVZOZpr = BigInt("874")
		const fromGtF4OLy = accounts[4]
		const operator8D1sFT = accounts[1]
		const datavph2fQy = "0x021b"
		const tokenIdLp7t0fF = BigInt("297")
		const fromhztQ6wt = accounts[2]
		const operatorEDcYNbu = accounts[1]
		const dataqYuIrc = "0x1d1912"
		const tokenIdkEJh2EI = BigInt("2045")
		const fromboECrDQ = accounts[3]
		const operatornwjKmBQ = accounts[1]
		const dataJjFDbvo = "0x111b06041019001d1e110d0d1a1f"
		const tokenIdb22OPOr = BigInt("899")
		const fromDE1zu39 = accounts[4]
		const operatorJeWb1Cg = accounts[3]
		const datavxnzZPi = "0x0c04201f13191709020c0e0b0d0e151d1b03101804090d0400"
		const tokenIdLE9N0d4 = BigInt("1067")
		const fromMX0vEP1 = "0x0000000000000000000000000000000000000001"
		const operatorB1QA99D = accounts[2]
		const nullnaKgwiY = await contractmBTqbA.onERC721Received.call(operatortD7P1pq, fromWm4DWWK, tokenIdHyrnAkK, datalfSNN6N, {from: accounts[1]});
		const nullmn2eluC = await contractmBTqbA.onERC721Received.call(operator8D1sFT, fromGtF4OLy, tokenIdVZOZpr, dataqFiRHU7, {from: accounts[1]});
		const nullfKjPwJ0 = await contractmBTqbA.onERC721Received.call(operatorEDcYNbu, fromhztQ6wt, tokenIdLp7t0fF, datavph2fQy, {from: accounts[4]});
		const nullQiBmjpx = await contractmBTqbA.onERC721Received.call(operatornwjKmBQ, fromboECrDQ, tokenIdkEJh2EI, dataqYuIrc, {from: accounts[2]});
		const nullzpnNzqf = await contractmBTqbA.onERC721Received.call(operatorJeWb1Cg, fromDE1zu39, tokenIdb22OPOr, dataJjFDbvo, {from: accounts[3]});
		const nullsxBPfgL = await contractmBTqbA.onERC721Received.call(operatorB1QA99D, fromMX0vEP1, tokenIdLE9N0d4, datavxnzZPi, {from: accounts[3]});
	});
})