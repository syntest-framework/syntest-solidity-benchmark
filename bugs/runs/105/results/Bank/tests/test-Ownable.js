const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractWdVmycV = await Ownable.new({from: accounts[2]});
		await contractWdVmycV.renounceOwnership.call({from: accounts[0]});
		const nullGqEG88g = await contractWdVmycV.owner.call({from: accounts[3]});
		const nullOz3exOi = await contractWdVmycV.isOwner.call({from: accounts[4]});
		const nullPIKIQeP = await contractWdVmycV.isOwner.call({from: accounts[0]});
		const nullajnH9Di = await contractWdVmycV.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const nullp1euJjL = await contractWdVmycV.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});
})